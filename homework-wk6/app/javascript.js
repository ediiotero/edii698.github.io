var topics = ["Bugs Bunny" , "Mickey Mouse" , "Popeye" , "Darkwing Duck" , "Aladdin" , "Daffy Duck" , "Simpsons"];


// Make buttons - loop through topics array and create buttons for each name entered
function makeBtns() {

	        $("#cartoonBtn").empty();

	        for (var i = 0; i < topics.length; i++) {

	          // create a new element <buttone> add class, attribute and name from the array, the append to div with id of cartoonBtn
	          var btn = $("<button>");
	         
	          btn.addClass("cartoon btnStyle");
	          
	          btn.attr("data-name", topics[i]);
	          
	          btn.text(topics[i]);
	          
	          $("#cartoonBtn").append(btn);
	        }
	      }

	    // call the makeBtns function, to populate with pre-made buttons  
    	makeBtns();       
 
$("#cartoonBtn").on("click", "button", function() {

      var cartoon = $(this).attr("data-name");

	  var apiKey = 	"4YyGRb5dGeL3fAcD4Cfw8RurypjRIiKM"
     // url to pull 10 gifs from
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cartoon + "&api_key=" + apiKey + "&limit=10";

      		// ajax call
	      $.ajax({
	          url: queryURL,
	          method: "GET"
	        })
	         // .done promise
	        .done(function(response) {
	          console.log(queryURL);

	          console.log(response);
	         
	          var cartoonGet = response.data;

	          // loop through response.data and add the following tags
	        
	          for (var i = 0; i < cartoonGet.length; i++) {

	           		
		            var cartoonDiv = $("<div>");

		            
		            var pTag = $("<p>").text("Rating: " + cartoonGet[i].rating);

		            var cartoonImage = $("<img class='play'>");
		            // add thes data attributes to items from the array
		            cartoonImage.attr("src", cartoonGet[i].images.fixed_height_still.url);
		            cartoonImage.attr("data-animate", cartoonGet[i].images.fixed_height.url);
		            cartoonImage.attr("data-still", cartoonGet[i].images.fixed_height_still.url);
		           
		            // append new tags to the items from the array
		            cartoonDiv.append(cartoonImage);
		            cartoonDiv.append(pTag);

	            	// prepend them to the id cartoonGif
				     $("#cartoonGif").prepend(cartoonDiv);

				            			// this click will play and pause the gif
				                      $('.play').on("click", function() {

				      
									      var play = $(this).attr("data-state");
									   
									      if (play === "still") {
									        $(this).attr("src", $(this).attr("data-animate"));
									        $(this).attr("data-state", "animate");
									        console.log("play");
									      } else {
									        $(this).attr("src", $(this).attr("data-still"));
									        $(this).attr("data-state", "still");
									        console.log("stop");
									      }

									    });
				                       }
	        });
	    });

	// click event to make new buttons
  $("#addCartoon").on("click", function(event) {

      event.preventDefault();

      var newInput = $("#cartoonInput").val().trim();
      
		     // for loop to create a new array var madeBtn
		      for (var i = 0; i < topics.length; i++) {
						var madeBtn = topics[i];
				}
				// use new array 'madeBtn' to compare to newInput
				// if it does not match make a button otherwise show the alert
					if (newInput !== madeBtn) {
						topics.push(newInput);
						makeBtns();
					} else {
						alert("Pick another cartoon");
					}
				     

	  console.log(newInput);
	  console.log(topics);
   
    });  
