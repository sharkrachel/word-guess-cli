var Word = require("./word.js");
var inquirer = require("inquirer");

// letters entry
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
var philadelphia = [
"gritty",
"old city",
"liberty bell",
"ben franklin",
"the eagles",
"center city",
"brotherly love",
"philly cheesesteak",
"soft pretzel"
];

// Pick Random index from philadelphia array
var randomWordGen = Math.floor(Math.random() * philadelphia.length);
var randomWord = philadelphia[randomWordGen];

// Pass random word through Word constructor
var selectedWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var remainingGuesses = 10;

function theLogic() {
  // Generates new word for Word constructor if true
  if (requireNewWord) {
    // Selects random philadelphia array
    var randomWordGen = Math.floor(Math.random() * philadelphia.length);
    var randomWord = philadelphia[randomWordGen];

    // Passes random word through the Word constructor
    selectedWord = new Word(randomWord);

    requireNewWord = false;
  }

  // TestS if a letter guessed is correct
  var wordComplete = [];
  selectedWord.objArray.forEach(completeCheck);

  // letters remaining to be guessed
  if (wordComplete.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess this Philadelphia themed word!",
          name: "userinput"
        }
      ])
      .then(function(input) {
        if (
          !letterArray.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
          console.log("\nPlease try again!\n");
          theLogic();
        } else {
          if (
            incorrectLetters.includes(input.userinput) ||
            correctLetters.includes(input.userinput) ||
            input.userinput === ""
          ) {
            console.log("\nAlready guessed or nothing entered. Please try again\n");
            theLogic();
          } else {
            // Checks if guess is correct
            var wordCheckArray = [];

            selectedWord.userGuess(input.userinput);

            // Checks if guess is correct
            selectedWord.objArray.forEach(wordCheck);
            if (wordCheckArray.join("") === wordComplete.join("")) {
              console.log("\nIncorrect\n");

              incorrectLetters.push(input.userinput);
              remainingGuesses--;
            } else {
              console.log("\nCorrect!\n");

              correctLetters.push(input.userinput);
            }

            selectedWord.log();

            // Print guesses left
            console.log("Guesses Left: " + remainingGuesses + "\n");

            // Print letters guessed already
            console.log(
              "Letters Guessed: " + incorrectLetters.join(" ") + "\n"
            );

            // Guesses left
            if (remainingGuesses > 0) {
              // Call function
              theLogic();
            } else {
              console.log("Sorry, you lose!\n");

              restartGame();
            }

            function wordCheck(key) {
              wordCheckArray.push(key.guessed);
            }
          }
        }
      });
  } else {
    console.log("YOU'RE A WINNER!\n");

    restartGame();
  }

  function completeCheck(key) {
    wordComplete.push(key.guessed);
  }
}

function restartGame() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to:",
        choices: ["Play Again", "Exit"],
        name: "restart"
      }
    ])
    .then(function(input) {
      if (input.restart === "Play Again") {
        requireNewWord = true;
        incorrectLetters = [];
        correctLetters = [];
        remainingGuesses = 10;
        theLogic();
      } else {
        return;
      }
    });
}

theLogic();

// var checkWinOrLose = "start"
// function startGame() {
//     inquirer.prompt({
//         type: "input",
//         message: "Please guess a letter",
//         name: "userGuess"
//     }).then(function(input){
//         var word = new Word(input.userGuess, checkWinOrLose);
//         checkWinOrLose =word.getLetterGuess();
      
//         startGame();
    
//     })
// }
// startGame()





