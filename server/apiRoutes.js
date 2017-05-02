
var request = require("request");


var express = require("express");
var request = require("request");
var mongojs = require("mongojs");
var path = require("path");
var logger = require("morgan");

var databaseUrl = "mongodb://yumcache:yumcache@ds151917.mlab.com:51917/heroku_wdkfp391";
var collections = ["foods"];

var db = mongojs(databaseUrl, collections);



db.on("error", function(error){
	console.log("Database Error:", error);
});

module.exports = function(app) {

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/index.html'))

	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/index.html"))

	});



	//endpoint to return a list of the user's foods with the xpiration date
	// app.get('/userfoods', function(req, res) {
		
	// res.sendFile(path.join(__dirname, "../public/foods.html"))

	// 	//todo find the users foods
	// 	// res.send([]);
	// });

	app.post('/userfoods', function(req,res){

	// res.sendFile(path.join(__dirname, "../public/foodlist.html"))

		var food = req.body;

		food.done = false;

		db.foods.save(food, function(error, saved){
			if (error){
				console.log(error);
			} else {
				res.send(saved);
			}
		});
	});

app.get("/all", function(req, res) {
  
  // res.sendFile(path.join(__dirname, "../public/foodlist.html"))

  db.foods.find({}, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});




	//this is the file where all api routes go
	app.post('/saveitems', function(req, res) {
		var list = req.body;
		console.log(list);
		res.send({
			foo: 'bar'
		});
		//todo

		//iterate list of foods
		//for each food, find the food from the food model
		//add foods to the user object
		//save the user
	});

	app.get("/search", function(req,res) {

		res.sendFile(path.join(__dirname,"../public/maps.html"))

		//todo save the serach query to the user

		request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + req.query.query + "&key=AIzaSyD1b9U8M4FK8ETr_ZpuEDMTOMPkxrJI1jU", function (error, response, body) {
	  		console.log('error:', error); // Print the error if one occurred 
	  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  		console.log('body:', body); // Print the HTML for the Google homepage. 
	  		res.send(body);
		});
	});

app.get("/maps", function(req,res){

		// request("https://maps.googleapis.com/maps/api/geocode/json?address=" + req.&key=AIzaSyD1b9U8M4FK8ETr_ZpuEDMTOMPkxrJI1jU")

})


});

}

