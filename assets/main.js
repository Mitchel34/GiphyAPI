// //javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });

var topics = ["Honda", "Acura", "Toyota", "Lexus", "Chrysler", "Maserati", "BMW", "Mercedes-Benz", "Ford", "Dodge"];
for (var i = 0; i < topics.length; i++) {
    var newBtn = $("<button>");
    newBtn.attr("brand", topics[i]);
    newBtn.text(topics[i]);
    $("#buttonDiv").append(newBtn);
}

$("button").on("click", function () {
    var carBrand = $(this).attr("brand");
    console.log(carBrand);

    // Constructing a queryURL using the brand name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        carBrand + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                // Creating and storing a div tag
                var carDiv = $("<div>");
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);
                // Creating and storing an image tag
                var carImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                carImage.attr("src", results[i].images.fixed_height.url);
                carDiv.append(p);
                carDiv.append(carImage);
                $("#gifs-appear-here").prepend(carDiv);
            }
        });
});

$(".gif").on("click", function () {

    var state = $(this).attr("data-state");
    // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

    // STEP TWO: make a variable named state and then store the image's data-state into it.
    // Use the .attr() method for this.
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});