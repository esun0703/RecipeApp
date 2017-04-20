$(document).ready();

$("#search").on("click", function(){
	var searchQuery = document.getElementById("input").value;
	var searchURL = "/search?query=" + searchQuery
$.ajax({
	url: searchURL,
	method: "GET"
	}).done(function(response){
	console.log(response);
})
})

$("#maps").on("click", function(){
	$("#a").append("<b>Appended text</b>");
})