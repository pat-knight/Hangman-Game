



//when game starts
document.onloadstart = function(){
	prompt("Press any key to begin");
}
//selet category


//define word choices
var category = [
var wordBankChar = ["Marty McFly", "Dr Emmett Brown", "Marvin Berry", "Biff Tannen", "Jennifer"], 
var wordBankQuote = ["Great Scott", "This is heavy", "What are you looking at butthead", "I hate manure"],
var wordBankObject = ["DeLorean", "Gray's Sports Almanac", "Manure"],
]
//select word from wordbank at random
	//split word into letters
	//display underlined spaces for each letter in word


//during gameplay
//when letter pressed or clicked
	//remove letter from available choices
	//if letter is part of the word, 
		//replace space with letter
	//if letter is not part of word
		//decrease available lives
		//draw hangman 

	//if letter selected brings available lives to 0, end game
		//game over, try again?

	//if letter selected is final correct letter
		//increase wins
		//victory screen/sound
		//ask to play again
