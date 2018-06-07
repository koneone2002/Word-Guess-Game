

var guesses = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterToGuess = "";
var lettersGuessed;
var gameOver = false;


var letterIndex = Math.floor(Math.random() * letters.length);
letterToGuess = letters[letterIndex];

startGame();

function startGame() {
    var letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];
    guesses = 0;
    lettersGuessed = [];
    gameOver = false;
    window.addEventListener("keyup", eventKeyPressed, true);
}

function eventKeyPressed(e) {
    if (!gameOver) {
       document.getElementById("guesses").innerHTML = "Letters Guessed: " + lettersGuessed;
       var letterPressed = String.fromCharCode(e.keyCode);
       letterPressed = letterPressed.toLowerCase();
       guesses++;
       lettersGuessed.push(letterPressed);

       if (letterPressed == letterToGuess) {
          gameOver = true;
       } else {

          letterIndex = letters.indexOf(letterToGuess);
          guessIndex = letters.indexOf(letterPressed);
          console.log(guessIndex);
          if (guessIndex < 0) {
             higherOrLower = "That is not a letter";
          }

        }
    }
}