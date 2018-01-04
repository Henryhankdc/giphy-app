$(document).ready(function() {

var topics = ['Fine', 'Yes!', 'No!', 'No Problem', 'FML', 'LOL', 'Magic'];



function starterButtons(){
    // create buttons for initial topics. each buttons contains data value
    for (i= 0; i < topics.length; i++){
        var startButtons =$('<button type="button" class="btn btn-secondary gif-button">');
        $('#gif-button-wrapper').append(startButtons);
        $(startButtons).attr('data-value', topics[i]);
        $(startButtons).text(topics[i]);

    }

   
}
starterButtons();

function general() {

// On click for gif buttons.
    $('.gif-button').on('click', function(e){

        e.preventDefault();
        $("#gif-holder").empty();

        console.log('clicked');
        var gifValue = $(this).attr("data-value");


         // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    gifValue + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing our AJAX GET request
  $.ajax({
      url: queryURL,
      method: "GET"
    })

     // After the data comes back from the API
     .done(function(response) {
         console.log(response);
        // Storing an array of results in the results variable
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            // create div to hold gif image
            var gifItemDiv = $("<div class='item'>");

            // create gif img tag with still state
            var gifImage = $("<img data-state=\"still\">");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            // Still image
            gifImage.attr("src", results[i].images.fixed_height_small_still.url).addClass('gif');
            // still image as data-still
            gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);

            // date-animate, animated image
            gifImage.attr("data-animate", results[i].images.fixed_height_small.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
            // gifDiv.append(p);
            gifItemDiv.append(gifImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gif-holder").prepend(gifItemDiv);

        }
// Add onclick still gif and animate
        $('.gif').on('click', function(){
            var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
        
        });

     });

    });
//   end onclick



}
general();



// function for adding new gif group and buttons

function newGifButton(){

    $('#submit-btn').on('click', function(e){
        e.preventDefault();
        var inputValue = $('#gif-text').val();
    console.log(inputValue);
        
    // create a new button with data value
    var newButton =$('<button type="button" class="btn btn-secondary gif-button">');
        $('#gif-button-wrapper').append(newButton);
        $(newButton).attr('data-value', inputValue);
        $(newButton).text(inputValue);

        // HERE***********************************
        // On click for gif buttons.
    $('.gif-button').on('click', function(e){

        e.preventDefault();
        $("#gif-holder").empty();

        console.log('clicked');
        var gifValue = $(this).attr("data-value");


         // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    gifValue + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing our AJAX GET request
  $.ajax({
      url: queryURL,
      method: "GET"
    })

     // After the data comes back from the API
     .done(function(response) {
         console.log(response);
        // Storing an array of results in the results variable
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            // create div to hold gif image
            var gifItemDiv = $("<div class='item'>");

            // create gif img tag
            var gifImage = $("<img data-state=\"still\">");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            // Still image
            gifImage.attr("src", results[i].images.fixed_height_small_still.url).addClass('gif');
            // still image as data-still
            gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);

            // date-animate, animated image
            gifImage.attr("data-animate", results[i].images.fixed_height_small.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
            // gifDiv.append(p);
            gifItemDiv.append(gifImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gif-holder").prepend(gifItemDiv);

        }

        // Add onclick still gif and animate
        $('.gif').on('click', function(){
            var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
        
        });


     });


    });

        // ****************************************

    });




}
newGifButton();


});
// end document.ready
