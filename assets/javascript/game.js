// define variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var answer = "";
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var availableLetters = "abcdefghijklmnopqrstuvwxyz";
// guess is what the player picks by pressing a key
var guess = "";
// guessed is an array that stores the player's guess in each round
var guessed = [];

// create a random letter function which creates a letter called answer 
function compGuess() {
    answer = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
}


// create a start function which resets wins losses and guesses back to zero and makes a new computer Guess

function restart() {
    availableLetters = "abcdefghijklmnopqrstuvwxyz";
    guessed = [];
    answer = "";
    guessesLeft = 9;
    compGuess();
    console.log("answer is: " + answer);
}

compGuess();
console.log("answer is: " + answer);

// create a listener which will validate that correct key was pressed

document.onkeyup = function(event) {
    guess = String.fromCharCode(event.keyCode).toLowerCase();
    if (alphabetLetters.indexOf(guess) === -1) {
           alert("please choose a letter");

    } else if (guess.indexOf(guessed) === 1)  {
               alert("You already chose that letter");
            

           } else if (answer === guess) {
               wins++;
               document.getElementById("wins").innerHTML = "Wins : " + wins;
               alert("You won");
               restart();  

               console.log("user guess is " + guessed);

               // if player guesses the correct answer - we will add 1 to the wins
               // we will alert the player that they won 
               // we will reset and restart the game
                    

               // if player guesses an incorrect letter we will take one guess away from remaining guesses
               // we will put the guessed letter in an array so it cannot be guessed again
    
            } else if (answer != guess) {
                guessed.push(guess);
                guessesLeft --;
                document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + guessesLeft;
                document.getElementById("guesses").innerHTML = "Letters Guessed: " + guess;
                document.getElementById("guessed").innerHTML = "Letters Guessed: " + guessed;

                console.log("guessed is " + guessed);
                console.log("guesses Left: " + guessesLeft);

               // if the remaining guesses gets to zero - the player loses the game
               // alert the player they have lost
               // add 1 to the losses variable
               // restart the game

               if (guessesLeft === 0) {
                   alert("you lose, press any key to contine");
                   losses++;
                   document.getElementById("losses").innerHTML = "Losses: " + losses;
                   restart();
               }
           }
       
        }
    
    console.log("wins " + wins);
    console.log("loses " + losses);

