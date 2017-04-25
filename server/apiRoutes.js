var request = require("request");
<<<<<<< HEAD
module.exports = function(app) {


=======
var express = require("express");
module.exports = function(app) {

>>>>>>> 65ffaa92ca6e1e8a2051bb0d5d450b2dfb14ac47
	//endpoint to return a list of the user's foods with the xpiration date
	app.get('/userfoods', function(req, res) {
		//todo find the users foods
		res.send([]);
	})






<<<<<<< HEAD
=======

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

		//todo save the serach query to the user
		var savedSpots = [];

		


		request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + req.query.query + "&key=AIzaSyD1b9U8M4FK8ETr_ZpuEDMTOMPkxrJI1jU", function (error, response, body) {
	  		console.log('error:', error); // Print the error if one occurred 
	  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  		console.log('body:', body); // Print the HTML for the Google homepage. 
	  		res.send(body);
		});
	});




}
>>>>>>> 65ffaa92ca6e1e8a2051bb0d5d450b2dfb14ac47

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

		//todo save the serach query to the user

		request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + req.query.query + "&key=AIzaSyD1b9U8M4FK8ETr_ZpuEDMTOMPkxrJI1jU", function (error, response, body) {
	  		console.log('error:', error); // Print the error if one occurred 
	  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  		console.log('body:', body); // Print the HTML for the Google homepage. 
	  		res.send(body);
		});
	});

	


}
