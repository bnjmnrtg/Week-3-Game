var correctLetter = []

var wordList = 'duncan';
console.log(correctLetter.length, wordList.length)

document.onkeyup = function(event){
	userGuess= String.fromCharCode(event.keyCode).toLowerCase();
		// console.log('working');


if ( correctLetter.length === wordList.length ){
	console.log("functionstoping")
	alert("you win")
}
// 'parker','ginobili','popovich','leonard';

	for (var i = 0; i < 5; i++) {
		console.log(userGuess + '===' + wordList[i]);
		if (userGuess === wordList[i].toLowerCase()){
			// console.log('Letter Appears');
			$("#words"). append("<div>"+ userGuess + "</div>")

			correctLetter.push(wordList[i])
		 }
		 


		 }

 


	// var letterIndex= word1.indexOf(userGuess); 
	// 	console.log(''+letterIndex);


	// 		var spanToFill = document.getElementById(''+letterIndex);
	// 	console.log(spanToFill);


	



}