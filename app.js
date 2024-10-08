// set up server
var express = require("express");
var path = require("path");
var puppeteer = require("puppeteer-core"); // Import puppeteer-core
var routes = require("./routes");
var app = express();

app.set("port", process.env.PORT || 1500);
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use("/", routes);

// Add a test route to check Chrome installation
app.get('/test-chrome', async (req, res) => {
    try {
        const chromePath = '/opt/render/.cache/puppeteer/chrome/linux-129.0.6668.89/chrome-linux64/chrome';
        console.log(`Chrome Path: ${chromePath}`);

        const browser = await puppeteer.launch({
            executablePath: chromePath,
            headless: true,
        });

        const version = await browser.version();
        console.log(`Chrome Version: ${version}`);

        await browser.close();
        res.send(`Chrome is installed and the version is: ${version}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to launch Chrome');
    }
});

// Start the server
app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});
