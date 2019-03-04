var Letter = require("letter.js");

function Word(word) {
  this.arr = word.split("");
  //return new Letter(char);
  this.checkLetter = function(letter) {
    Letter.ifCorrect(letter);
  };
  this.call = function(letter) {
    Letter.UpdateGuessed(letter);
  };
}
