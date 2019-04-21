// ==============================================================================
// DEPENDENCIES
// ==============================================================================
    
    // SERVER, MODEL AND FRAMEWORK NEEDS
    const express = require("express");
    const bodyParser = require("body-parser"); // *TODO:* From wk15 homework -- do I still need this?!
    const exphbs = require("express-handlebars");
    const logger = require("morgan");
    const mongoose = require("mongoose");

    // SCRAPING TOOLS
    const axios = require("axios");
    const cheerio = require("cheerio");

    // REQUIRE MODELS AND ROUTES
    var db = require("./models");
    var router = express.Router();
    app.use(router);
    // var routes = require("./controllers");
    // app.use(routes);


// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

    // CALL EXPRESS, SET PORT
    const app = express();
    const PORT = process.env.PORT || 8081;

    // Use morgan logger for logging requests -- use default setting of 'dev'
    app.use(logger("dev"));

    // Parse request body
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false })); // *TODO:* From wk15 homework -- do I still need this?!

    // Set Handlebars as default engine
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Make "public" a static folder
    app.use(express.static(__dirname + "/public"));

    // create a 404 path if I screw up the code
    app.use(function (req, res) {
        const err = new Error("Something's weird... I can't find what you're looking for!");
        err.status = 404;
        res.json(err);
    });

    // Connect to the Mongo DB
    mongoose.connect("mongodb://localhost/mongoHeadlines", { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("mongoDB connection has been made!");
        }
    });

    // Connect db to production (for Heroku)
    var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
    mongoose.connect(MONGODB_URI);

// ================================================================================
// ROUTES
// ================================================================================




// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });