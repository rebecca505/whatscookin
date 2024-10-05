var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    console.log("main");
    res.render("main");
})

router.get("/scrape", function(req, res){
    console.log("scrape");
    res.render("scrape");
})

module.exports = router; 
