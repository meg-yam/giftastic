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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + one + "&limit=10&api_key=JWY1Nqe6HigkKrAGVaWA1tzOxWDkgTnD";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("gif-view").append(response);
    });
}

$(document).on("click", ".hello", displayGifs);
renderButtons();