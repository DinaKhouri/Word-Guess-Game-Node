//require the letter constructor
var Letter = require("./letter.js");
//word constructor to create a constructor object for each of the word letters
function Word(word) {
  //create array of random word (works for single words no spaces)
  //it pushed the New Letter object into the array
  this.arr = [];
  for (i = 0; i < word.length; i++) {
    this.arr.push(new Letter(word.charAt(i)));
  }
  //Method that utilises for loop to create a string and display it , it is checking if it is guessed it will show the letter, if it is not guessed it will show the "_" , it is using function from the required Letter constructor
  this.string = function() {
    var string = "";
    this.arr.forEach(function(e) {
      string += e.ifCorrectShow();
    });
    return string;
  };
  //this function will run to check if the input guessed letter is already in the word array, if it is there it will change guessed to true , this will be used in the ifCorrectShow to show either lettrs or dashes
  this.charCheck = function(GuessedLetter) {
    this.arr.forEach(function(e) {
      e.UpdateGuessed(GuessedLetter);
    });
  };
}

module.exports = Word;
