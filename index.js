var inquirer = require('inquirer');
var Word = require("./word.js");

var word = ["frozen", "moana", "finding nemo", "monsters inc", "cars", "inside out", "a bugs life"];

function startGame(){

    var random = Math.floor(Math.random() * word.length)+1;
    var randomWord = word[random];
    var newWord = new Word(randomWord);
    console.log(newWord.getGuessedWord());
}