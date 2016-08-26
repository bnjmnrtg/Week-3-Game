var wordList = ['DUNCAN', 'PARKER', 'GINOBILI', 'POPOVICH', 'LEONARD'];
var currentWord = [];
var split = [];
var correctLetter = [];
var lettersGuessed = [];
var remainingGuesses = 10;
var wins = 0;
var loses = 0;
var dashes = [];
var updatedDisplay;

document.onkeyup = function(event) {
    playGame();

};
// ======================================================================================================
function playGame() {
    userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    lettersGuessed.push(userGuess);

    // This Will Display Letters and # of Guesses
    $('#guesses-remaining').empty();
    $('#guesses-remaining').html("Guesses Remaining: " + remainingGuesses);

    for (var i = 0; i < 1; i++) {
        console.log("lettersGuessed" + " " + lettersGuessed);
        console.log("userGuess"+" "+userGuess);
        if(correctLetter===userGuess){
        }
        else{
            $('#guessed-letters').append(' ' + userGuess + " - ");
            remainingGuesses--;
        }
    }

    if (remainingGuesses === 0) {
        loses++;
        $('#loss').empty();
        $('#loss').html("Loses: " + loses);
    }

    if (remainingGuesses <= 0) {
        $('#guesses-remaining').html("Guesses Remaining: " + "Game Over");
        $('#guessed-letters').html("Letters Guessed: " + 'You Lose');
        $('#loss').empty();
        $('#loss').html("Loses: " + loses);
        $('#alerts').html("Instruction: Press Any Key To Continue To Play");

    }

    if (remainingGuesses < 0) {
        reset();
    }
    // ================  Selects Random Word ============================= 

    for (var i = 0; i < 1; i++) {
        var x = Math.floor(Math.random() * (5 - 0));
        // console.log("Random wordList" + " " + wordList[x]);
        currentWord.push(wordList[x]);
    };

    for (var i = 0; i < currentWord.length; i++) {
        split = currentWord[0].split('');
    };

    console.log('currentWord' + ' ' + split);
    // ===================  Checks and Pushes Correct Letters ====================================================
    for (var i = 0; i < split.length; i++) {
        console.log(userGuess === split[i]);
        if (userGuess === split[i]) {
            correctLetter.push(userGuess);
            console.log("Correct Letters" + " " + correctLetter)
            $('#current-word').append(userGuess);
        }
        // ================== Verifys If That You won the Game ==============================
        if (split.length === correctLetter.length) {
            wins++;
            $('#win').html("Wins: " + wins);
            reset();
        }

    };

}

function updateDisplay(letter) {
    for (i = 0; i < split.length; i++) {
        if (split[i] === letter) {
            split.splice(i, 1, letter);
        }
    }
    updatedDisplay = dashes.join('');
    $('#current-word').html(updatedDisplay);
};

// =========== This Is The Reset Function That Automatically Trigers When You LOSE
function reset() {
    currentWord = [];
    split = [];
    correctLetter = [];
    lettersGuessed = [];
    currentWord ;
    remainingGuesses = 10;
    $('#current-word').html("Word: " + correctLetter);
    $('#guesses-remaining').html("Guesses Remaining: ");
    $('#guessed-letters').html("Letters Guessed: ");
    

    playGame();
};

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
