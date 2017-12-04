



//when game starts
// window.onload = function(){
// 	prompt("Press any key to begin");
// }


//define word choices
var wordbank = [
["Marty McFly", "Dr Emmett Brown", "Marvin Berry", "Biff Tannen", "Jennifer"],
["Great Scott", "This is heavy", "What are you looking at butthead", "I hate manure"],
["DeLorean", "Gray's Sports Almanac", "Manure"],
	];
//select category
var selectCategory = wordbank[Math.floor(Math.random() * wordbank.length)];

var category = function() {
	if (selectCategory === wordbank[0]) {
		categoryChoice.innerHTML = "The category is Movie Characters";
	} else if (selectCategory === wordbank[1]) {
		categoryChoice.innerHTML = "The category is Movie Quotes";
	} else {
		categoryChoice.innerHTML = "The category is Important Movie Objects";
}
}

console.log(selectCategory);
//select word from wordbank at random

var word = selectCategory[Math.floor(Math.random() * selectCategory.length)];

console.log(word);
	//split word into letters
word.split();
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
