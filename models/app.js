'use strict';

//import dependency 

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose schema to take an object that shows the shape of your database entries

var foodSchema = new Schema({
	food_name:String,
	shelf_life:String,
});

//export module to be used in server.js

module.exports = mongoose.model('Food', foodSchema);

// $("#submitBtn").on("click", function(){
// 	$.ajax({
// 		type:"POST",
// 		url:"/userfoods",
// 		dataType: "json",
// 		data: {
// 			food_name: $("#foodInput").val(),
// 			shelf_life: $("#shelfInput").val(),
// 			created: Date.now()
// 		}
// 		console.log(data);
// 	})
// 	.done(function(data){
// 		console.log(data);
// 		$("#foodInput").val("");
//     	$("#shelfInput").val("");
//     }
// 	);
// 	return false;
// });



// function getData(endpoint){

//   $("#results").empty();

//   $.getJSON(endpoint, function(data) {
//     // For each entry of that json...
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       // Append each of the animal's properties to the table
//       $("#results").append("<tr><td>" + data[i].food_name + "</td>" +
//                            "<td>" + data[i].shelf_life + "</td>" + "</td></tr>");
//     }
//   });
// }
// getData("/all");

