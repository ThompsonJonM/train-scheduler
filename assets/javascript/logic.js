$(document).ready(function() {

	// 

	//Firebase link
	var config = {
		apiKey: "AIzaSyCC1rwzzaDUgAwYC9_E-nag7lyXe0Uw1k0",
		authDomain: "train-scheduler-db-c5ca0.firebaseapp.com",
		databaseURL: "https://train-scheduler-db-c5ca0.firebaseio.com",
		projectId: "train-scheduler-db-c5ca0",
		storageBucket: "train-scheduler-db-c5ca0.appspot.com",
		messagingSenderId: "832417526249"
	};

	firebase.initializeApp(config);

	$(".submitInput").on("click", function () {
		// console.log("this works");

		var nameInput = $("#nameInput").val().trim();

		var numberInput = $("#numberInput").val().trim();

		var destinationInput = $("#destInput").val().trim();

		var timeInput = $("#timeInput").val().trim();

		var frequencyInput = $("#freqInput").val().trim();
	});

});