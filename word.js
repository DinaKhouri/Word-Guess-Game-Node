//require the letter constructor
var Letter = require("./letter.js");
//word constructor to create a constructor object for each of the word letters
function Word(word) {
  //create array of random word (works for single words no spaces)
  this.arr = [];
  for (i = 0; i < word.length; i++) {
    this.arr.push(new Letter(word.charAt(i)));
  }
  //Method that utilises for loop to create a string and display it , it is checking if it is guessed it will show the letter, if it is not guessed it will show the "_" , it is using function from the required Letter constructor
  this.string = function() {
    var string = "";
    this.arr.forEach(function(target) {
      string += target.ifCorrectShow();
    });
    return string;
  };
  this.charCheck = function(GuessedLetter) {
    this.arr.forEach(function(target) {
      target.UpdateGuessed(GuessedLetter);
    });
  };
}

module.exports = Word;
