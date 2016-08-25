

var wordList = ['duncan', 'parker','ginobili','popovich','leonard'];
var currentWord;
var wordArray = []; 
var lettersGuessed ;
var remainingGuesses = 25;

var x = Math.floor(Math.random() * (5 - 0)) ;

document.onkeyup = function(event){	

var userGuess= String.fromCharCode(event.keyCode).toUpperCase();

	$('#guessed-letters').append(' ' + userGuess + " - ");
	$('#guesses-remaining').empty();
	$('#guesses-remaining').html("Guesses Remaining: " + remainingGuesses);
	remainingGuesses--;	

	if(remainingGuesses <= 0){
		$('#guesses-remaining').html("Guesses Remaining: " + "Game Over");
		$('#guessed-letters').html("Letters Guessed: " + 'You Lose');
	}
		

	for (var i = 0; i < wordList.length; i++) {
	
		currentWord.push(wordList[x]);	
	
		console.log('currentWord'+ ' ' + currentWord);
	}
	
	console.log(currentWord);
}


	// for (var i = 0; i < 5; i++) {
	// 	// console.log(userGuess + '===' + wordList[i]);
	// 	if (userGuess === wordList[i].toLowerCase()){
	// 		// console.log('Letter Appears');
	// 		$("#words"). append("<div>"+ userGuess + "</div>")

	// 		correctLetter.push(wordList[i])
	// 	 }
		 


	// 	 }

// var correctLetter = []

// var wordList = 'duncan';
// console.log(correctLetter.length, wordList.length)

// document.onkeyup = function(event){
// 	userGuess= String.fromCharCode(event.keyCode).toLowerCase();
// 		// console.log('working');


// if ( correctLetter.length === wordList.length ){
// 	console.log("functionstoping")
// 	alert("you win")
// }
// // 'parker','ginobili','popovich','leonard';

// 	for (var i = 0; i < 5; i++) {
// 		console.log(userGuess + '===' + wordList[i]);
// 		if (userGuess === wordList[i].toLowerCase()){
// 			// console.log('Letter Appears');
// 			$("#words"). append("<div>"+ userGuess + "</div>")

// 			correctLetter.push(wordList[i])
// 		 }
		 


// 		 }


 


	// var letterIndex= word1.indexOf(userGuess); 
	// 	console.log(''+letterIndex);


	// 		var spanToFill = document.getElementById(''+letterIndex);
	// 	console.log(spanToFill);


	




// }

