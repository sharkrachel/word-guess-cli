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





