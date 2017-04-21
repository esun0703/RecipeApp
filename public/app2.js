$("#foodz").click(function(){getData("/name")});

$("#lyfe").click(function(){getData("/life")});


function getData(endpoint){

  $("#results").empty();

  $.getJSON(endpoint, function(data) {
    // For each entry of that json...
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      // Append each of the animal's properties to the table
      $("#foodDisplay1").append("<tr><td>" + data[i].food_name + "</td>" +
                           "<td>" + data[i].shelf_life + "</td>" + "</td></tr>");
    }
  });
}

getData("/all");