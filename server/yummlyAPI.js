console.log("hi")

// This variable will be pre-programmed with our application ID
var AppID = "0dce280a";
// var APIKey: "9c9bb07049e77a49e5539ef78a5b18b6";


// These variables will hold the results we get from the user's inputs via HTML
var searchTerm = "";
var numResults = 0;

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "http://api.yummly.com/v1/api/recipes?_app_id=0dce280a&_app_key=9c9bb07049e77a49e5539ef78a5b18b6&q=" + //term goes heres // + "&requirePictures=true"


    //OG URL:  http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters

    //http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY

    // Counter to keep track of article numbers as they come in
    // var recipeCounter = 0;

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
                wellSection.attr("id", "article-well-" + recipeCounter);
                $("#well-section").append(wellSection);


                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////



                // Confirm that the specific JSON for the article isn't missing any details
                // If the article has a headline include the headline in the HTML
                if (yummlyData.attribution.matches[i] !== "null") {
                    $("#article-well-" + articleCounter)
                        .append(
                            "<h3 class='articleHeadline'><span class='label label-primary'>" +
                            articleCounter + "</span><strong> " +
                            yummlyData.attribution.matches[i].id + "</strong></h3>"
                        );

                    // Log the first article's headline to console
                    console.log(yummlyData.attribution.matches[i].id);
                }


                // If the article has a byline include the headline in the HTML
                if (yummlyData.attribution.matches[i].id) {
                    $("#article-well-" + recipeCounter)
                        .append("<h5>" + yummlyData.attribution.matches[i].id + "</h5>");

                    // Log the first article's Author to console.
                    console.log(yummlyData.attribution.matches[i].id);
                }


                // Then display the remaining fields in the HTML (Section Name, Date, URL)
                $("#articleWell-" + recipeCounter)
                    .append("<h5>Section: " + yummlyData.attribution.matches[i].id + "</h5>");


                // Log the remaining fields to console as well
                console.log(yummlyData.attribution.matches[i].id);

            }
        });


        // METHODS
        // ==========================================================



        // on.("click") function associated with the Search Button
        $("#run-search").on("click", function(event) {
            // This line allows us to take advantage of the HTML "submit" property
            // This way we can hit enter on the keyboard and it registers the search
            // (in addition to clicks).
            event.preventDefault();


            // Initially sets the articleCounter to 0
            recipeCounter = 0;


            // Empties the region associated with the articles
            $("#well-section").empty();


            // Grabbing text the user typed into the search input
            searchTerm = $("#search-term").val().trim();
            var queryURL = queryURLBase + searchTerm;


            // Number of results the user would like displayed
            numResults = $("#num-records-select").val();


            // Then we will pass the final queryURL and the number of results to
            // include to the runQuery function
            runQuery(numResults, queryURL);
        });


        // This button clears the top articles section
        $("#clear-all").on("click", function() {
            recipeCounter = 0;
            $("#well-section").empty();
        });
}