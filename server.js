var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

//set up for express
var app = express();
var PORT = 3000;

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

//express data to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//Routes
app.use(express.static('app'));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//app listner
app.listen(PORT, function(){
	console.log("App is listening on " + PORT);
});

