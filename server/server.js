
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static("public"));

var databaseUrl = "FOODLIFE";
var collections = ["foods"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});
// var app = express();
var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json 
app.use(bodyParser.json({ type: 'application/**json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))


app.use(express.static("public"));

//Routes
require("./apiRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

$("#namesort").click(function(){getData("/name")});

$("#legsort").click(function(){getData("/legs")});


function getData(endpoint){

  $("#results").empty();

  $.getJSON(endpoint, function(data) {
    // For each entry of that json...
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      // Append each of the animal's properties to the table
      $("#results").append("<tr><td>" + data[i].name + "</td>" +
                           "<td>" + data[i].legs + "</td>" + "</td></tr>");
    }
  });
}

getData("/all");
