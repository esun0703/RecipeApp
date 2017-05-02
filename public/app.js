// import React from "react";
// import ReactDOM from "react-dom";
// import Main from "./components/mainApp";


// // Here we create a variable for holding the name and birthday


// // ReactDOM.render(
// //   <div className="main-container">
    
// //   </div>, document.getElementById(""));

// ReactDOM.render(
//   <Main/>, document.getElementById("foodRoot"));
// // >>>>>>> 65ffaa92ca6e1e8a2051bb0d5d450b2dfb14ac47


// // WORKKING ON THE ONCLICK FUNCTION to validate data

$("#submitBtn").on("click", function(){
	$.ajax({
		type:"POST",
		url:"/userfoods",
		dataType: "json",
		data: {
			food_name: $("#foodInput").val(),
			shelf_life: $("#shelfInput").val(),
			created: Date.now()
		}
		console.log(data);
	})
	.done(function(data){
		console.log(data);
		$("#foodInput").val("");
    	$("#shelfInput").val("");
    }
	);
	return false;
});



function getData(endpoint){

  $("#results").empty();

  $.getJSON(endpoint, function(data) {
    // For each entry of that json...
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      // Append each of the animal's properties to the table
      $("#results").append("<tr><td>" + data[i].food_name + "</td>" +
                           "<td>" + data[i].shelf_life + "</td>" + "</td></tr>");
    }
  });
}
getData("/all");

