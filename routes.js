// for routing
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    console.log("main");
    res.render("main");
})

const axios = require("axios");
const cheerio = require("cheerio");

// define route to render scraped data
router.get("/scrape", async(req, res) => {
    console.log("scraping!");
    try
    {   
        // get HTML content of Columbia dining webpage
        const response = await axios.get("https://dining.columbia.edu/");
        const html = response.data;
        // initialize Cheerio with HTML content
        const $ = cheerio.load(html);

        // extract dining halls from HTML doc
        const openDiningHalls = [];
        $(".location.clearfix.dining-location.open .name a").each((index, element) => {
            openDiningHalls.push($(element).text().trim());
        });

        console.log("Open dining halls:", openDiningHalls);
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
