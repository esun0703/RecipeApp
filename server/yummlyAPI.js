// This variable will be pre-programmed with our application ID
var AppID = "0dce280a";
var APIKey: "9c9bb07049e77a49e5539ef78a5b18b6";

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "http://api.yummly.com/v1/api/recipes?_app_id=0dce280a&_app_key=9c9bb07049e77a49e5539ef78a5b18b6&" + "your _search_parameters"//change to keywords
//OG URL:  http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters

//http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY

// Counter to keep track of article numbers as they come in
var recipeCounter = 0;

// This runQuery function expects two parameters:
// (the number of articles to show and the final URL to download data from)
function getRecipes(numFoods, queryURL) {


    // The AJAX function uses the queryURL and GETS the JSON data associated with it.
    // The data then gets stored in the variable called: "yummlyData"

    $.ajax({
            url: queryURL,

            method: "GET"

        }).done(function(yummlyData) {

                // Logging the URL so we have access to it for troubleshooting
                console.log("------------------------------------");
                console.log("URL: " + queryURL);
                console.log("------------------------------------");

                // Log the yummlyData to console, where it will show up as an object
                console.log(yummlyData);
                console.log("------------------------------------");


                // Loop through and provide the correct number of articles
                for (var i = 0; i < numFoods; i++) {

                    // Add to the Article Counter (to make sure we show the right number)
                    recipeCounter++;

                    //////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////


                    // Create the HTML well (section) and add the article content for each (do this)
                    var wellSection = $("<div>");
                    wellSection.addClass("well");
                    wellSection.attr("id", "article-well-" + articleCounter);
                    $("#well-section").append(wellSection);


                    //////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////



                    // Confirm that the specific JSON for the article isn't missing any details
                    // If the article has a headline include the headline in the HTML
                    if (NYTData.response.docs[i].headline !== "null") {
                        $("#article-well-" + articleCounter)
                            .append(
                                "<h3 class='articleHeadline'><span class='label label-primary'>" +
                                articleCounter + "</span><strong> " +
                                NYTData.response.docs[i].headline.main + "</strong></h3>"
                            );

                        // Log the first article's headline to console
                        console.log(NYTData.response.docs[i].headline.main);
                    }
