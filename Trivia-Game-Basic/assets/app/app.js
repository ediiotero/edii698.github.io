window.onload = function() {
  $("#start").on("click", run);
};

var number = 30;

var clockRunning = false;

var intervalId;

    

    $("#start").on("click", run);

    
    function run() {
  
        if (!clockRunning) {
          intervalId = setInterval(decrement, 1000);
          clockRunning = true;
        }

        $("#quiz").removeClass("none");
        $("#start").addClass("none");
    }

    
    function decrement() {
      
      number--;

      $("#show-number").html("<h2>" + number + "</h2>");
     
      if (number === 0) {
       stop();
      }

    }

    function stop() {

      clearInterval(intervalId);

      runQuiz();
    }

    
function runQuiz() {

      var amountCorrect = 0;
      var amountWrong = 0;
      var noAnswer = 0;

      for (var i = 1; i <= 8; i++) {
        var radios = document.getElementsByName('ansrs'+i);

          for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];

              if (radio.value == "correct" && radio.checked) {
                amountCorrect++;
              }
              else if(radio.value == "wrong" && radio.checked) {
                amountWrong++;
              } else {
                noAnswer = 8 - [amountCorrect + amountWrong];
              }
          }
      }

      
      $("#quiz").addClass("none");
      $("#done").removeClass("none");
      $("#correct").text("Correct Responses: " + amountCorrect);
      $("#wrong").text("Wrong Responses: " + amountWrong);
      $("#noAnswer").text("No Responses: " + noAnswer);
}    

      

      

      

     


