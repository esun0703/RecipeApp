import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/mainApp";


// Here we create a variable for holding the name and birthday


// ReactDOM.render(
//   <div className="main-container">
    
//   </div>, document.getElementById(""));

ReactDOM.render(
  <Main/>, document.getElementById("foodRoot"));
// >>>>>>> 65ffaa92ca6e1e8a2051bb0d5d450b2dfb14ac47


// WORKKING ON THE ONCLICK FUNCTION to validate data

	$('#submitBtn').on('click', addFood);

function addFood(event){
	event.preventDefault();
}

$("#submitBtn").on("click", function(){
	$.ajax({
		type:"POST",
		url:"/submitfood",
		dataType: "json",
		data: {
			food_name:food_name;
			shelf_life: shelf_life;
			created: Date.now()
		}
	})
	.done(function(data){
		console.log(data);

	});
	return false;
});

module.exports = app;
