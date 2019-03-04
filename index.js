//require word constructor
var Word = require("word.js");

// use enquirer
var inquirer = require("inquirer");
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
function GuessingWord() {}

startGame();
