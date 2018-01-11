// firebase setup
var config = {
    apiKey: "AIzaSyCemOisjvq3GJvUGVMtmMrxP3cQRgP3aVU",
    authDomain: "train-scheduler-ea3b8.firebaseapp.com",
    databaseURL: "https://train-scheduler-ea3b8.firebaseio.com",
    projectId: "train-scheduler-ea3b8",
    storageBucket: "train-scheduler-ea3b8.appspot.com",
    messagingSenderId: "899957974508"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  // add train button click event
  $("#add-train-btn").on("click", function() {
  		// store form input values
  		var trainName = $("#train-name-input").val().trim();
  		var destination = $("#destination-input").val().trim();
  		var firstTrainTime = $("#first-train-input").val().trim();
  		var frequency = $("#frequency-input").val().trim();

  		// train add object to push to database
  		var trainAdded = {
  			name: trainName,
  			destination: destination,
  			firstTrainTime: firstTrainTime,
  			frequency: frequency
  		};

  		database.ref().push(trainAdded);

  		alert("New train was added to schedule");

  		console.log(trainAdded.name);
	    console.log(trainAdded.destination);
	    console.log(trainAdded.firstTrainTime);
	    console.log(trainAdded.frequency);

	    // return false;
  });


  database.ref().on("child_added", function(childSnapshot) {

  		// store values take from the database
  		var newTrainName = childSnapshot.val().name;
  		var newDestination = childSnapshot.val().destination;
  		var newFirstTrain = childSnapshot.val().firstTrainTime;
  		var newFrequency = childSnapshot.val().frequency;
  		
  		
	    // first train time pushed back by one year
	    var firstTrain = moment(newFirstTrain, "hh:mm").subtract(1, "years");
	    console.log(firstTrain);

	    // Current Time
	    var theTime = moment();

	    // diff between the first train time and now in minutes
	    var timeDiff = moment().diff(moment(firstTrain), "minutes");
	    console.log("DIFFERENCE IN TIME: " + timeDiff);

	    // the time diff modulus the frequency
	    var timeRemainder = timeDiff % newFrequency;
	    console.log(timeRemainder);

	    // time till the next train
	    var timeTillNextTrain = newFrequency - timeRemainder;
	    console.log("MINUTES TILL TRAIN: " + timeTillNextTrain);

	   
	    var theNextTrain = moment().add(timeTillNextTrain, "minutes");
	    // next train arival time
	     var timePretty = moment(theNextTrain).format("hh:mm");
	     // html to add to train time table
  		$("#train-times > tbody").append("<tr><td>" + newTrainName + "</td><td>" + newDestination + "</td><td>" +
          newFrequency + "</td><td>" + timePretty + "</td><td>" + timeTillNextTrain + "</td></tr>");

  });

  // auth.signInWithEmailAndPassword(email,pass);
  // auth.createUserWithEmailAndPassword(email,pass);

  // auth.onAuthStateChanged(firebaseUser => {});

  // code for email form

  // user variables
  var user = database.ref('/user');
  var newUser = database.ref('/newuser');
  var email;
  var pass;

  // login button
  $('#loginBtn').on("click", function(event){

  	// store form values
  	var email = $('#email-input').val().trim();
  	var pass = $('#password-input').val().trim();
  	var auth = firebase.auth();

  	// user info authentication
  	var promise = auth.signInWithEmailAndPassword(email,pass);
  	console.log("logged in");


  	return false;
  });

  $('#logOutBtn').on("click", function(){

  	// authentication signOut
  	firebase.auth().signOut();
  	console.log("logged out");

  });

  $('#signUpBtn').on("click", function(event){

  	// store form values
  	var email = $('#email-input').val().trim();
  	var pass = $('#password-input').val().trim();
  	var auth = firebase.auth();

  	var promise = auth.createUserWithEmailAndPassword(email,pass);
  	console.log("sign up");
	
  	// empty form
  	$(email).empty();
  	$(pass).empty();

  	return false;	
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {

  	if(firebaseUser) {

  			// if user is logged in hide loginBtn and show logOutBtn
  			console.log(firebaseUser)
  			$('#logOutBtn').removeClass("none");
  			$('#loginBtn').addClass("none");
  			$('#signUpBtn').addClass("none");
 
  	}else{

  		// if user is not logged in hide logOutBtn and show logInBtn
  		console.log("not logged in");
  			$('#logOutBtn').addClass("none");
  			$('#loginBtn').removeClass("none");
  			$('#signUpBtn').removeClass("none");

  	}
  })