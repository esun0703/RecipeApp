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

var errorCount = 0;
$('#addFood input').each(function(index, val){
	if($(this).val() === '') { errorCount++; }
})

module.exports = app;
