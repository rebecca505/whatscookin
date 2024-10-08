// for routing
const { name } = require("ejs");
var express = require("express");
var router = express.Router();

router.get("/balance", function(req, res){
    console.log("balance");
    res.render("balance");
});

router.get("/scrape", function(req, res){
    console.log("scrape");
    res.render("scrape");
});

router.get("/profile", function(req, res){
    console.log("profile");
    res.render("profile");
});

router.get("/", function(req, res){
    console.log("login");
    res.render("login");
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Here you would typically check the username and password against a database
    // For this example, let's assume any non-empty username and password are valid
    if (username && password) {
        // Redirect to the main page after successful login
        return res.redirect('/'); // Redirect to the main page
    }

    // If login fails, you can redirect back to login or show an error
    res.redirect('/login'); // Redirect back to the login page
});

const puppeteer = require("puppeteer");
// define route to render scraped data
router.get("/main", async (req, res) => {
    console.log("scraping in main!");
    try {
        // Launch Puppeteer with additional options for Render environment
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'] // Additional launch options
        });
        const page = await browser.newPage();

        // Enable request interception to control resource loading
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            // Abort requests for images and stylesheets to speed up the scraping process
            if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet') {
                request.abort(); // Abort image and stylesheet requests
            } else {
                request.continue(); // Continue with other requests
            }
        });

        // Function to scrape dining halls from specified URL & selector
        const scrapeDiningHalls = async (url, selector, barnard) => {
            // Navigate to the specified URL
            await page.goto(url, { waitUntil: "domcontentloaded" }); // Ensure DOM is loaded
            await page.waitForSelector(selector, { timeout: 10000 }); // Wait for selector

            // Select elements containing dining hall names
            return await page.evaluate((selector, barnard) => {
                const halls = [];
                const elements = document.querySelectorAll(selector); // Select elements based on the provided selector

                elements.forEach(element => {
                    if (barnard) { // Barnard webpage shows all dining halls if everything's closed
                        const nameElement = element.querySelector(".whats-open-tile_locationName_26Mtj");
                        const statusElement = element.querySelector(".whats-open-tile_statusGreen_245bq");

                        if (nameElement && statusElement) {
                            const name = nameElement.textContent.trim();
                            const status = statusElement.textContent.trim();

                            // Only push if not closed
                            if (status.includes("Open")) {
                                halls.push(name); // Add open halls to the array
                            }
                        }
                    } else { // Columbia webpage does not have this issue
                        halls.push(element.textContent.trim()); // Add the dining hall name to the array
                    }
                });

                return halls; // Return the array of dining hall names
            }, selector, barnard);
        };

        // Scrape from Columbia & Barnard dining webpages
        const columbiaHalls = await scrapeDiningHalls("https://dining.columbia.edu/", 
            ".location.clearfix.dining-location.open .name a, .location.clearfix.dining-location.closing .name a, .location.clearfix.retail-location.open .name a, .location.clearfix.retail-location.closing .name a", 
            false
        );
        const barnardHalls = await scrapeDiningHalls("https://dineoncampus.com/barnard",
            ".row.whats-open-tile_hours_8qXHw",
            true
        );

        // Combine data from both dining halls
        const openDiningHalls = [...columbiaHalls, ...barnardHalls];
        console.log("Open dining halls:", openDiningHalls);

        // Close the browser after scraping
        await browser.close();

        // Send scraped data to main.ejs template for rendering
        res.render("main", { openDiningHalls });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error scraping data'); // Handle errors and send a response
    }
});

// Export the router
module.exports = router;