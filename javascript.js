var gifs = ["red", "orange", "yellow", "green", "blue", "purple"];



function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < gifs.length; i++) {
        var b = $("<button>");
      
        b.addClass("hello");
        b.attr("data-name", gifs[i]);
        b.text(gifs[i]);
        
        $("#buttons").append(b);
    }
};


$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var one = $("#gif-input").val().trim();

    gifs.push(one);
    console.log(gifs);
    
    renderButtons();
});


function displayGifs() {

    var one = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + one + "&rating=pg&limit=10&api_key=JWY1Nqe6HigkKrAGVaWA1tzOxWDkgTnD";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var result = response.data

        for (var i = 0; i < result.length; i++) {
            var gifDiv = $("<div>");

            var rating = result[i].rating;

            var d = $("<div>").text("Rating: " + rating);

            var gifImage = $("<img>");
            gifImage.attr("src", result[i].images.fixed_height_still.url);
            gifImage.attr("data-still", result[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", result[i].images.fixed_height.url)
            gifImage.attr("data-state", "still");

            $(gifDiv).append(d);
            $(gifDiv).append(gifImage);

            $("#gif-view").prepend(gifDiv);
           
            gifImage.on("click", function() {
                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate")
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        };

       
    });
}





$(document).on("click", ".hello", displayGifs);
renderButtons();