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

$("#reset").on('click', function(){
    // console.log("button works")
    restartbutton();
});
// ======================================================================================================
function playGame() {
    userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    lettersGuessed.push(userGuess);

    for (var i = 0; i < lettersGuessed.length; i++) {
         if (userGuess === lettersGuessed) {
            console.log("same letter");
         }
    }
 
    // This Will Display Letters and # of Guesses
    $('#guessed-letters').append(" " + userGuess + " - ");
    $('#guesses-remaining').empty();
    $('#guesses-remaining').html("Guesses Remaining: " + remainingGuesses);

        console.log("lettersGuessed" + " " + lettersGuessed);
        console.log("userGuess" + " " + userGuess);
        
// ========== This will see if you still have  remainingGuesses. ==============
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
            console.log(i)
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

// =========== This Is The Reset Function That Automatically Trigers When You LOSE
function reset() {
    currentWord = [];
    split = [];
    correctLetter = [];
    lettersGuessed = [];
    currentWord;
    remainingGuesses = 10;
    $('#current-word').html("Word: " + correctLetter);
    $('#guesses-remaining').html("Guesses Remaining: ");
    $('#guessed-letters').html("Letters Guessed: ");


    playGame();
};

function restartbutton(){
    wins = 0;
    loses = 0;
    currentWord = [];
    split = [];
    correctLetter = [];
    lettersGuessed = [];
    currentWord;
    remainingGuesses = 10;
    $('#current-word').html("Word: " + correctLetter);
    $('#guesses-remaining').html("Guesses Remaining: ");
    $('#guessed-letters').html("Letters Guessed: ");
    $('#loss').html("Loses: " + loses);
    $('#win').html("Wins: " + wins);
    


    playGame();
};
