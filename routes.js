// for routing
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    console.log("main");
    res.render("main");
})

const puppeteer = require("puppeteer");

// define route to render scraped data
router.get("/scrape", async(req, res) => {
    console.log("scraping!");
    try
    {   
        // launch Puppeteer and open new browser instance
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // enable request interception
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet') {
                request.abort(); // abort request for images & stylesheets
            } else {
                request.continue(); // continue with other requests
            }
        });

        // navigate to Columbia dining webpage
        await page.goto("https://dining.columbia.edu/", {
            waitUntil: "domcontentloaded" // ensure DOM is loaded
        });

        // scrape dining halls from webpage
        const openDiningHalls = await page.evaluate(() => {
            const items = [];
            // select elements containing dining hall names
            const elements = document.querySelectorAll(".location.clearfix.dining-location.open .name a");
            elements.forEach(element => {
                items.push(element.textContent.trim());
            });
            return items;
        });

        console.log("Open dining halls:", openDiningHalls);

        // close the browser
        await browser.close();

        // send data to scrape.ejs template to display
        res.render("scrape", { openDiningHalls });
    }
    catch (error)
    {
        console.error(error);
        res.status(500).send('Error scraping data');
    }
});

module.exports = router; 
