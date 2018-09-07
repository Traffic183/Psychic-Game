let letters = ["c", "d", "a", "h", "m"];
let letterToGuess = null;
let guessesLeft = 9;
let guessedLetters = [];

let wins = 0;
let losses = 0;

let updateGuessesLeft = () => {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

let updateLetterToGuess = () => {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

let updateGuessesSoFar = () => {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(
    ", "
  );
};

let reset = () => {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = (event) => {
  guessesLeft--;
  let letter = String.fromCharCode(event.which).toLowerCase();

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
