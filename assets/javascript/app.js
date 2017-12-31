// alert('hey');

var topics = ['Fine', 'Yes!', 'No!', 'No Problem', 'FML', 'LOL', 'Magic'];

function starterButtons(){
    // create buttons for initial topics. each buttons contains data value
    for (i= 0; i < topics.length; i++){
        var startButtons =$('<button type="button" class="btn btn-secondary">');
        $('#gif-button-wrapper').append(startButtons);
        $(startButtons).attr('data-value', topics[i]);
        $(startButtons).text(topics[i]);

    }
}
starterButtons();

// $("#cat-button").on("click", function() {

//     //
//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

//     //
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })

//     //
//     .done(function(response) {

//       //
//       var imageUrl = response.data.image_original_url;

//       //
//       var catImage = $("<img>");

//       //
//       catImage.attr("src", imageUrl);
//       catImage.attr("alt", "cat image");

//       //
//       $("#images").prepend(catImage);
//     });
//   });