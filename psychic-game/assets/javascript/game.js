// <!-- 	User needs to make a choice
// 	Computer to make a choice
// 	Capture those choices
// 	Compare choices, determine win, loss, number of guesses left, display guesses already made
// 	Display reesults to the user -->

	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

	var wins = 0;
	var losses = 0;
	var guessesLeft = 9; 
	var guessesSoFar = [];
	var userGuess = null;

	// function psychicGuess(computerGuess) {
	var computerGuess = options[Math.floor(Math.random () * options.length)];

		console.log(computerGuess);
	

	// computerGuess()

	document.onkeyup  = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// console.log(userGuess);

		// console.log(computerGuess);

		if (guessesSoFar.indexOf(userGuess) < 0 && options.indexOf(userGuess) >= 0) {
 				guessesSoFar[guessesSoFar.length]=userGuess;
 				guessesLeft--;
			    document.getElementById('guesses').innerHTML = "Guesses Left: " + guessesLeft;
			    document.getElementById('userInput').innerHTML += userGuess + " , ";
 			}

		// document.getElementById('userInput').innerHTML += userGuess + " , ";

		if (userGuess === computerGuess) {
			wins++;
			document.getElementById('wins').innerHTML = "Wins: " + wins;
			guessesLeft = 9;
			guessesSoFar = [];
			document.getElementById('guesses').innerHTML = "Guesses Left: " + guessesLeft;
			document.getElementById('userInput').innerHTML = "";
			computerGuess = options[Math.floor(Math.random () * options.length)];
		}

		if (guessesLeft === 0) {
			losses++;
			document.getElementById('losses').innerHTML = "Losses: " + losses;
			guessesLeft = 9;
			guessesSoFar = [];
			document.getElementById('guesses').innerHTML = "Guesses Left: " + guessesLeft;
			document.getElementById('userInput').innerHTML = "";
			computerGuess = options[Math.floor(Math.random () * options.length)];
			console.log(computerGuess);
		}

	}
