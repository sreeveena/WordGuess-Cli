//Contains a constructor, Word that depends on 
//the Letter constructor. This is used to create 
//an object representing the current word the user 
//is attempting to guess

var Letter = require("./letter.js");
var Word = function(randomWord){
    this.randomWord = randomWord;
    this.letterArray = [];
    this.getGuessedWord = function(){
        var guessedWord = "";
        for( var i = 0; i < this.letterArray.length; i++){
            guessedWord += this.letterArray[i].get();
        } 
        return guessedWord;
    }
    this.prepareWord = function(){
        var j = 0;
        for( var i = 0; i < this.randomWord.length; i++){
            this.letterArray[j] = new Letter(this.randomWord[i]);
           j++;
        }
    }
    this.checkLetter = function(char){
        var result = false;
        for( var i = 0; i < this.letterArray.length; i++){
            if(this.letterArray[i].check(char) == true){
                result = true;
            }
        } 
        return result;
    }
    
}
module.exports = Word;