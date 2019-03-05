//require word constructor
var Word = require("./word.js");

// use enquirer
var inquire = require("inquirer");
// create an array of words to be guessed
var WordsArray = ["help", "play", "music", "instrument", "dog", "game", "test"];
//define guesses left
var GuessesLeft;

// new game function
function startGame() {
  var RandWord = WordsArray[Math.floor(Math.random() * WordsArray.length)];
  //new word object
  var word = new Word(RandWord);
  //guesses allowed before the player loses
  GuessesLeft = 5;
  //call a new game based on the random word picked
  // this function takes two values, the first one is the random word picked, the second one is the new word object created
  GuessingWord(word, RandWord);
}

// define the GuessingWord function which is the actual game for the picked word
function GuessingWord(input) {
  //starts by showing dashed of the word first, by calling string function from required word constructor
  console.log(input.string());
  //now we need to start interaction with the user/player so we start prompt
  inquire
    .prompt([
      {
        name: "letter",
        message: "Guess a letter."
      }
    ])
    .then(function(answer) {
      var inputletter = input.charCheck(answer.letter.toLowerCase());
      for (i = 0; i < this.arr.length; i++) {
        if ((this.arr[0] = inputletter)) {
          console.log("Correct Guess!");
        } else "Sorry it;s a wrong Guess";
        GuessesLeft--;
        console.log("you have " + GuessesLeft + " guesses left");
      }
    });
}

startGame();
