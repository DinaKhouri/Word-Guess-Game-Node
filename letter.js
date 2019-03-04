//creating a constructor named letter
function Letter(letter) {
  //this letter
  this.letter = letter;
  //check if letter exists
  this.guessed = false;
  //if it exists display it
  this.ifCorrectShow = function() {
    if (this.guessed === true) {
      return this.letter;
    } else return "- ";
  };
  //check if it exists and updated guessed to true if it is correct
  this.UpdateGuessed = function(input) {
    if (input === this.letter) {
      this.guessed = true;
    }
  };
}
//export Letter constructor
module.exports = Letter;
