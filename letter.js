
// a constructor that will either display the character or a blank placeholder depending.

//a string value that the character will be stored in

// a boolean to determin if that letter has been guessed yet

//a function that will return the character if it has been guessed, or a _ if it has not been guessed.

//a function that will take an argument (character) and check it, update to true if it's guessed correctely.

//constructor function for the character and the guess boolean
function Letter(value) {
    this.letter = value;
    this.guessed = false;
  
    this.toString = function() {
      if (this.letter === " ") {
        this.guessed = true;
        return " ";
      } else {
        if (this.guessed === false) {
          return "_";
        } else {
          return this.letter;
        }
      }
    };
  
    this.guess = function(guess) {
      if (guess === this.letter) {
        this.guessed = true;
      }
    };
  }
  
  module.exports = Letter;





// function Letter(chosenWord, userGuess) {
//     this.chosenWordLetters = chosenWord.split("");
//     this.correctGuess = false;
//     this.display = [];
//     this.wrongGuess = [];
//     this.userGuess = userGuess;
//     this.remainingGuesses = 10;

//     this.initializeDisplay = function () {
//         for (var i = 0; i < this.chosenWordLetters.length; i++) {
//             this.display.push("_");
//         }
//         console.log(this.display.join(" "));

//     }

//     this.guess = function () {
//         for (var i = 0; i < this.chosenWordLetters.length; i++) {
//             if (this.chosenWordLetters[i] == this.userGuess) {
//                 this.display[i] = this.userGuess;
//             }
//         }

//         console.log(this.display.join(" "));

//         if (this.chosenWordLetters.indexOf(this.userGuess) === -1) {
//             this.correctGuess = false;
//             if (this.wrongGuess.indexOf(this.userGuess) === -1) {
//                 this.wrongGuess.push(this.userGuess);
//                 console.log(this.wrongGuess.join(" "));
//                 this.remainingGuesses--;
//                 console.log(this.remainingGuesses);
//             }

//             else {
//                 console.log("You already guessed that letter, try again");
//             }
//         }
//         if (this.display.indexOf("_") === -1) {
//             console.log("You Won! Great job!")
//             return "Game Won";
//         }
//         if (this.remainingGuesses === 0) {
//             console.log("Game Over")
//             return "Game Over";
//         }

//         return "";
//     }


// };

