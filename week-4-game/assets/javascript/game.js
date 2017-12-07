$( document ).ready(function() {

	var cloud = {
		hp : 120,
		ap : 100,
		
		
	}
	var tifa = {
		hp : 100,
		ap : 100,
		
		
	}
	var vincent = {
		hp : 150,
		ap : 100,
		
		
	}
	var sephiroth = {
		hp : 180,
		ap : 100,
		
		
	}

	var myCharacter = [cloud, tifa, vincent, sephiroth];



	$(".cloudHp").text(cloud.hp);
	$(".tifaHp").text(tifa.hp);
	$(".vincentHp").text(vincent.hp);
	$(".sephirothHp").text(sephiroth.hp);


// Tried to DRY up the code below, but could not get it to work.
// left it in so you can get an idea of what I was trying to do.


  //   $("div.urCharacter.urCloud").on("click", function() {
	
		// // var playerId = $(this).attr("data-player");
		
		// // $(playerId).appendTo(".urCharacter");
		// // $(".urCharacter").appendTo(playerId);
  //   	$(".your").removeClass("none");
  //       $("#urTifa, #urVincent, #urSephiroth").appendTo(".enemies");
  //       $("#urTifa, #urVincent, #urSephiroth").removeClass(".player");
  //       $("#urTifa, #urVincent, #urSephiroth").addClass(".toFight");

  //       // $(".your").removeClass("none");
		// console.log("working");

  //    });

  	// $("section.cloud").on("click", function() {
   //  	$(".urCharacter").appendTo(".cloud");
   //      $(".tifa, .vincent, .sephiroth").appendTo(".enemies");
   //      $(".tifa, .vincent, .sephiroth").removeClass(".player");
   //      $(".tifa, .vincent, .sephiroth").addClass(".toFight");

   //   });

   //  $("section.tifa").on("click", function() {
   //  	$(".urCharacter").appendTo(".tifa");
   //      $(".cloud, .vincent, .sephiroth").appendTo(".enemies");
   //      $(".cloud, .vincent, .sephiroth").removeClass(".player");
   //      $(".cloud, .vincent, .sephiroth").addClass(".toFight");

   //   });

   //  $("section.vincent").on("click", function() {
   //  	$(".urCharacter").appendTo(".vincent");
   //      $(".tifa, .cloud, .sephiroth").appendTo(".enemies");
   //      $(".tifa, .cloud, .sephiroth").removeClass(".player");
   //      $(".tifa, .cloud, .sephiroth").addClass(".toFight");

   //   });

   //  $("section.sephiroth").on("click", function() {
   //  	$(".urCharacter").appendTo(".sephiroth");
   //      $(".tifa, .vincent, .cloud").appendTo(".enemies");
   //      $(".tifa, .vincent, .cloud").removeClass(".player");
   //      $(".tifa, .vincent, .cloud").addClass(".toFight");

   //   });

   //  $("section.cloud.enemies").on("click", function() {
   //  	$(".urCharacter").appendTo(".cloud");
   //      $(".tifa, .vincent, .sephiroth").appendTo(".defend");
   //      $(".tifa, .vincent, .sephiroth").removeClass(".enemies");
   //      $(".tifa, .vincent, .sephiroth").addClass(".toFight");

   //   });

   //  $("section.tifa.enemies").on("click", function() {
   //  	$(".urCharacter").appendTo(".tifa");
   //      $(".cloud, .vincent, .sephiroth").appendTo(".defend");
   //      $(".cloud, .vincent, .sephiroth").removeClass(".enemies");
   //      $(".cloud, .vincent, .sephiroth").addClass(".toFight");

   //   });

   //  $("section.vincent.enemies").on("click", function() {
   //  	$(".urCharacter").appendTo(".vincent");
   //      $(".tifa, .cloud, .sephiroth").appendTo(".defend");
   //      $(".tifa, .cloud, .sephiroth").removeClass(".enemies");
   //      $(".tifa, .cloud, .sephiroth").addClass(".toFight");

   //   });

   //  $("section.sephiroth.enemies").on("click", function() {
   //  	$(".urCharacter").appendTo(".sephiroth");
   //      $(".tifa, .vincent, .cloud").appendTo(".defend");
   //      $(".tifa, .vincent, .cloud").removeClass(".enemies");
   //      $(".tifa, .vincent, .cloud").addClass(".toFight");

   //   });

   
	$(".cloud").on("click", function() {
        $(".tifa, .vincent, .sephiroth").addClass("none");
       		$(".tifa2, .vincent2, .sephiroth2").removeClass("none");
        $(".urCharacter2").addClass("none");
        	$(".urCharacter").removeClass("none");	
	});

	$(".tifa").on("click", function() {
        $(".cloud, .vincent, .sephiroth").addClass("none");
       		$(".cloud2, .vincent2, .sephiroth2").removeClass("none");
        $(".urCharacter2").addClass("none");
        	$(".urCharacter").removeClass("none");	
	});

	$(".vincent").on("click", function() {
        $(".tifa, .cloud, .sephiroth").addClass("none");
       		$(".tifa2, .cloud2, .sephiroth2").removeClass("none");
        $(".urCharacter2").addClass("none");
        	$(".urCharacter").removeClass("none");	
	});

	$(".sephiroth").on("click", function() {
        $(".tifa, .vincent, .cloud").addClass("none");
       		$(".tifa2, .vincent2, .cloud2").removeClass("none");
        $(".urCharacter2").addClass("none");
        	$(".urCharacter").removeClass("none");	
	});

	$(".tifa2").on("click", function() {
        $(".tifa2").addClass("none");
       		$(".tifa3").removeClass("none");
    });

    $(".cloud2").on("click", function() {
        $(".cloud2").addClass("none");
       		$(".cloud3").removeClass("none");
    });

    $(".vincent2").on("click", function() {
        $(".vincent2").addClass("none");
       		$(".vincent3").removeClass("none");
    });

    $(".sephiroth2").on("click", function() {
        $(".sephiroth2").addClass("none");
       		$(".sephiroth3").removeClass("none");
    });

    $(".attack-button").on("click", function() {
        $(".captain-planet").animate({ height: "100px" });
      });

// I could not figure out how to get the attack button to work
// I was trying to get the data that was still in the urCharacter2 class to compare to data that was now in the defend class


// if urCharacter2 has cloud, tifa, vincent, or sephiroth data AND defend has cloud3, tifa3, vincent3, or sephiroth3
// 	calculate player2 hp -= player1 ap
// 	calculate player1 hp -= player2 ap
// 	player1 ap * 2


});