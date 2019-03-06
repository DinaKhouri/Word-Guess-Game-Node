//require word constructor
var Word = require("./word.js");

// use enquirer
var inquire = require("inquirer");
// create an array of words to be guessed
var WordsArray = ["help", "play", "music", "cat", "dog", "game", "world"];
//define guesses left
var GuessesLeft;
//created an array to push the correct letters to it , so we can tell when the game is won
var correctLettersArr;
// new game function
function startGame() {
  var RandWord = WordsArray[Math.floor(Math.random() * WordsArray.length)];
  //new word object
  var word = new Word(RandWord);
  //guesses allowed before the player loses
  GuessesLeft = 5;
  //counter for correct letters to check when the user wins
  correctLettersArr = 0;
  //call a new game based on the random word picked
  // this function takes two arguments, the first one is the random word OBJECT picked, the second one is the new word object created
  GuessingWord(word, RandWord);
}

// define the GuessingWord function which is the actual game for the picked word
function GuessingWord(word, RandWord) {
  var lettersArr = [];

  //starts by showing dashed of the word first, by calling string function from required word constructor
  console.log(word.string());
  //now we need to start interaction with the user/player so we start prompt
  inquire
    .prompt([
      {
        name: "letter",
        message: "Guess a letter."
      }
    ])
    .then(function(answer) {
      //just grabbing the prompt answer changing it to lower case so we can compare it in the next step,checking if is true or false and pushing it to the lettters array
      word.charCheck(answer.letter.toLowerCase());
      word.arr.forEach(function(e) {
        lettersArr.push(e.letter);
      });
      if (lettersArr.indexOf(answer.letter.toLowerCase()) > -1) {
        console.log("Correct Guess!");
        correctLettersArr++;
        console.log(correctLettersArr);
        console.log(RandWord.length);
        if (correctLettersArr === RandWord.length) {
          console.log(
            "great job you Guessed the word, it is " + RandWord + "!"
          );
          process.exit();
        }
        //now we need to end the game and check if the user wants to play
      } else {
        GuessesLeft--;
        console.log("sorry wrong guess");
        console.log("you have " + GuessesLeft + " Left");
      }
      //here we need a function to check number of gueses left to see if the user can word another guess again or game over
      if (GuessesLeft > 0) {
        GuessingWord(word, RandWord);
      }
      //if you are out of guesses and still didnt guess it game over and show the word
      else {
        if (GuessesLeft === 0) {
          console.log("sorry you lost,the word was " + RandWord + ".");
          process.exit();
        }
      }
    });
}

startGame();
