//require the letter constructor
var Letter = require("letter.js");
//word constructor to create a constructor object for each of the word letters
function Word(word) {
  //create array of random word (works for single words no spaces)
  this.arr = word.split("");
  //Method that utilises for loop to create a string and display it , it is checking if it is guessed it will show the letter, if it is not guessed it will show the "_" , it is using function from the required Letter constructor
  this.string = function(char) {
    var string = "";
    for (i = 0; i < this.arr.length; i++) {
      string.push(char.ifCorrectShow(char));
    }
  };
  this.charCheck = function(char) {
    for (i = 0; i < this.arr.length; i++) {
      char.UpdateGuessed(char);
    }
  };
}

module.exports = Word;
