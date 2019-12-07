var inquirer = require('inquirer');
var Word = require("./word.js");
var Letter = require("./letter.js");

var word = ["frozen", "moana", "finding nemo", "monsters inc", "cars", "inside out", "a bugs life"];

function startGame(){

    var random = Math.floor(Math.random() * (word.length-1))+1;
    console.log(random);
    var randomWord = word[random];
    console.log(randomWord);
    var newWord = new Word(randomWord);
    newWord.prepareWord();
    console.log(newWord.getGuessedWord());
}
startGame();