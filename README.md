# WordGuess-Cli

Techonologies used:
1. node js

This assignment is about guessing a word from the word list. The player will have 12 guesses to guess the word by guessing one letter  at a time and the number of guesses count reduce each time.
This assignment has three javasript files.
1. letter.js
2. word.js
3. index.js

letter.js file has a constructor which returns the underlying character if the letter has been guessed, or a placeholder  if the letter has not been guessed.

word.js file has a constructor, Word that depends on the Letter constructor from letter.js. This is used to create an object representing the current word the user is attempting to guess.

index.js file has startGame function which picks a random word from the word list and a validation function that validate the user guesses.

    function Letter(char){
    this.char = char;
    this.guessed = false;
    this.get = function(){
        if(!this.char){
            return "_";
        }else if(this.guessed == true){
            return this.char;
        }else if(this.char == " "){
            return " ";
        }else{
            return "_";
        }

    }
    this.check = function(userChar){
        var result = false;
        if(userChar == char){
          this.guessed = true;  
          result = true;
        }
        return result;
    }
};

    function startGame(){

    var random = Math.floor(Math.random() * (word.length-1))+1;
    // console.log(random);
    randomWord = word[random];
    // console.log(randomWord);
    newWord = new Word(randomWord);
    newWord.prepareWord();
    // console.log(newWord.getGuessedWord());
    console.log("\nYou get 12 letter guesses to find the Pixar movie name.\n");
    promptUser();
}

[!gif]()