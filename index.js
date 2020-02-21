var Word = require("./word");
var inquirer = require("inquirer");

var letterArray = ["abcdefghijklmnopqrstuvwxyz"];

var philadelphia = [
    "gritty",
    "center city",
    "old city",
    "liberty bell",
    "ben franklin",
    "the eagles", 
    "philly cheesesteaks",
    "soft pretzels",
    "walt whitman",
    "muhammad ali"
];

var randomGen = Math.floor(Math.random() * philadelphia.length);

var randomWord = philadelphia[randomGen];

var chosenWord = new Word(randomWord);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10

function theLogic() {
    if (requireNewWord) {
        var randomGen = Math.floor(Math.random() * philadelphia.length);

        var randomWord = philadelphia[randomGen];
        var chosenWord = new Word(randomWord);
        requireNewWord = false;

    }
    var completeWord = [];
    chosenWord.objArray.forEach(completeCheck);
    if (completeWord.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess this Philadelphia word",
                name: "userGuess"
            }
        ]).then(function(input) {
            if (!letterArray.includes(input.userGuess) || input.userGuess.length > 1) {
                console.log("\nPlease try again!\n");
                theLogic();
            }
            else {
                if(incorrectLetters.includes(input.userGuess) || correctLetters.includes(input.userGuess) || input.userGuess === "") {
                    console.log("\nAlready guessed or nothing entered\n");
                }
            }


        })
    }else {
        console.log("YOU'RE A WINNER!\n");
    }
}
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





