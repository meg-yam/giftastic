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
        $("#gif-view").html("<img src=" + response.data[0].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[1].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[2].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[3].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[4].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[5].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[6].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[7].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[8].images.original.url + ">");
        $("#gif-view").append("<img src=" + response.data[9].images.original.url + ">");
    });
}

$(document).on("click", ".hello", displayGifs);
renderButtons();