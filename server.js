// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");
var morgan  = require("morgan");

// Create instance of express application
var app = express();
var PORT = process.env.PORT || 3000;

// Use content from the 'public' directory
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("short"));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// Tell Handlebars to search for views in the "views" directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT);
