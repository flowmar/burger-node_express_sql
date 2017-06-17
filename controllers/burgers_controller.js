// Imports

var express = require("express");
var router = express.Router();
// Import the burger.js file to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
        burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        });
    });

router.post('/add', function(req, res) {
    burger.insert(req.body.burger_name, function(data){
    res.redirect('/');
    });
});

router.put('/update/:id', function(req, res){
    var id = parseInt(req.params.id);
    burger.update(id, function(data){
        res.redirect('/');
    });
});

router.put('/delete/:id', function(req, res){
    var id = parseInt(req.params.id);
    burger.delete(id, function(data) {
        res.redirect('/');
    });
});

module.exports = router;