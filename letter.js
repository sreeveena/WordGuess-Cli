// display an underlying character or a blank placeholder 
// (such as an underscore), depending on whether or not the 
// user has guessed the letter
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
module.exports = Letter;