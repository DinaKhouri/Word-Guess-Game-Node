//creating a constructor named letter
function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
  this.ifCorrect = function() {
    if (guessed === true) {
      return this.letter;
    } else return "-";
  };
  this.UpdateGuessed = function() {
    for (i = 0; i < word.length; i++) {
      if ((word[i].toUpperCase() = this.letter.toUpperCase())) {
        this.guessed = true;
      } else this.letter = false;
    }
  };
}

module.exports=Letter;
