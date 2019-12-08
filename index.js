var inquirer = require('inquirer');
var Word = require("./word.js");
var Letter = require("./letter.js");

var word = ["frozen", "moana", "finding nemo", "monsters inc", "cars", "inside out", "a bugs life"];
var counter = 12;
var listOfGuess = [];
var newWord;
var randomWord;
function startGame(){

    var random = Math.floor(Math.random() * (word.length-1))+1;
    console.log(random);
    randomWord = word[random];
    console.log(randomWord);
    newWord = new Word(randomWord);
    newWord.prepareWord();
    console.log(newWord.getGuessedWord());
    console.log("\nYou get 12 letter guesses to find the Pixar movie name.\n");
    promptUser();
}
startGame();
function promptUser(){
    
    if(counter>0){
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "\n Please enter a letter and press return: "
            }
        ]).then (function(letter){ 
            counter--;   
            validate(letter);
            promptUser();
        });
    }else{
        console.log("\nSorry, you're out of guesses.\n".inverse);
        counter = 12;
        listOfGuess = [];
        inquirer.prompt([
            {
                message: "Would you like to play again? (y/n)",
                type: "confirm",
                name: "repeat",
                default: true
            }
        ]).then (function(ans){
            console.log(ans);
            if(ans.repeat == true){
                startGame();
            }
        });
    }   
               
}
//checks that the user's input is in correct format and compares the letter to gameWord to see if guess is correct
function validate(input) {
    // input = input.trim();
    console.log(input.letter.length);
    // console.log(input);
    if ((input.letter.length == 1) && /^[a-zA-Z]+$/.test(input.letter)) {
        var checkable = input.letter.toLowerCase();
        for(var i = 0; i < listOfGuess.length; i++){
            if(listOfGuess[i] == checkable){
                console.log("\nSorry, you have already guessed this letter!\n");
                counter++;
                return ; 
            }  
        }
        listOfGuess.push(checkable);
        if (newWord.checkLetter(checkable) == false) {  
            console.log("\nSorry, wrong letter!\n");
            console.log(counter + " guesses remaining");
            
        }
        else {
            if(randomWord == newWord.getGuessedWord()){
                console.log("Congratulations! You won.\n");
                console.log("The pixar movie name was: "+randomWord+"\n");
                counter = 0;

            }else{
                console.log(counter + " guesses remaining");
                console.log("correct letter: "+newWord.getGuessedWord());

            }
            
        }
    }
    else {
        console.log("\nPlease enter a valid letter, one at a time.\n");
        counter++;
    }
}