var Letter = require("./letter");
// contains a constructor

var Word = function(answer) {
    this.objArray = [];

    for(var i = 0; i < answer.length; i++){
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }
    this.log = function() {
        var answerLog = "";
        for(var i = 0; i < this.objArray.length; i++) {
            answerLog += this.objArray[i] + " ";
        }
        console.log(answerLog + "\n===================\n");
    }
    this.userInput = function(input) {
        for (var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
        }
    }
}

module.exports = Word;



// function randomWordGen() {

// }

// function Word (userGuess, checkWinOrLose) {
//     this.userGuess = userGuess;


//     if (checkWinOrLose.length != 0 || checkWinOrLose === "start") {
//     this.chosenWord = words[Math.floor(Math.random() * words.length)];
// }

//     this.getLetterGuess = function() {
//         var letter = new Letter(this.chosenWord, this.userGuess);

//         letter.initializeDisplay();
//         var checkWinOrLose= letter.guess();

//         return checkWinOrLose;
//     }

// }
