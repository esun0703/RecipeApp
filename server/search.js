$(document).ready();

$("#search").on("click", function(){
	var searchQuery = document.getElementById("input").value;
	var searchURL = "/search?query=" + searchQuery;
$.ajax({
	url: searchURL,
	method: "GET"
	}).done(function(response){
		var results = JSON.parse(response).results;
		console.log(results);
		results.forEach((element) => {
			console.log(element.formatted_address);
		});
	})
});



$("#maps").on("click", function(){
	$("#a").append("<b>Appended text</b>");
})