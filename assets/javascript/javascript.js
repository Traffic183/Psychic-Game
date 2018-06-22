//Global variables
var letters = ["c", "d", "a", "h", "m"];
var letterToGuess = null;
var guessesLeft = 9;
var guessedLetters = [];


//Counter
var wins = 0;
var losses = 0;


//update guesses remain
var updateGuessesLeft = function() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };


  //make random selection
var updateLetterToGuess = function () {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};


//keep record of guesses made 
  var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
  };


  //reset
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();


document.onkeydown = function(event) {
  guessesLeft--;
  var letter = String.fromCharCode(event.which).toLowerCase();


  guessedLetters.push(letter);
updateGuessesLeft();
updateGuessesSoFar();


if (letter === letterToGuess) {
  wins++;
  document.querySelector("#wins").innerHTML = wins;
  reset();
}
if (guessesLeft === 0) {
  losses++;
  document.querySelector("#loss").innerHTML = losses;
  reset();
}
};
