//Contains a constructor, Word that depends on 
//the Letter constructor. This is used to create 
//an object representing the current word the user 
//is attempting to guess

var Letter = require("./letter.js");
var Word = function(randomWord){
    this.randomWord = randomWord;
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
        for( var i = 0; i < this.letterArray.length; i++){
            this.letterArray[i].check(char);
        } 
    }
    
}
module.exports = Word;