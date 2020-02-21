var Word = require("./word");
var inquirer = require("inquirer");
var checkWinOrLose = "start"
function startGame() {
    inquirer.prompt({
        type: "input",
        message: "Please guess a letter",
        name: "userGuess"
    }).then(function(input){
        var word = new Word(input.userGuess, checkWinOrLose);
        checkWinOrLose =word.getLetterGuess();
      
        startGame();
    
    })
}
startGame()





