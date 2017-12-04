window.onload = function init(){



document.onkeypress = function unhide (){
	var display = document.getElementByClassName("unhidden");

		if (display.className == "unhidden") {
			display.className == "hidden";
		} else {
			display.className == "unhidden";
		}
	}

//populate letter bank with buttons
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// grab div 
var lettersDiv = document.getElementById("letterBank");


//create HTML content
 for (i = 0; i < letters.length; i++) {
          var buttonDiv = document.createElement("div");
          buttonDiv.innerHTML = letters[i];
          lettersDiv.appendChild(buttonDiv);  
          buttonDiv.id = "letter";
      }



//define word choices
var wordbank = [
["Marty McFly", "Dr Emmett Brown", "Marvin Berry", "Biff Tannen", "Jennifer"],
["Great Scott", "This is heavy", "What are you looking at butthead", "I hate manure"],
["DeLorean", "Gray's Sports Almanac", "Manure"],
	];
//select category
  
  var selectCategory = wordbank[Math.floor(Math.random() * wordbank.length)];

	if (selectCategory === wordbank[0]) {
		categoryChoice.innerHTML = "The category is Movie Characters";
	} else if (selectCategory === wordbank[1]) {
		categoryChoice.innerHTML = "The category is Movie Quotes";
	} else {
		categoryChoice.innerHTML = "The category is Important Movie Objects";

}

console.log(selectCategory);

//select word from wordbank at random

var word = selectCategory[Math.floor(Math.random() * selectCategory.length)];

console.log(word);
	//split word into letters
word.split();

console.log(word);

word = word.replace(/\s/g, "-");

console.log(word);

var unsolvedWord = [];
var unsolvedDiv = document.getElementById("wordspace");

for (var j = 0; j < word.length; j++) {
	unsolvedWord.push("_");
	wordspace.innerHTML = unsolvedWord.join(" ");
}


// for (var j = 0; j < word.length; j++) {
// 	unsolvedWord[j] = "_ "
// 	var unsolved = document.createElement("div");
//      unsolved.innerHTML = unsolvedWord[j];
//      unsolvedDiv.appendChild(unsolved);  
//      unsolved.id = "unsolved";
// } 






// // var possibleWord = words[Math.floor(Math.random() * words.length)];
// document.getElementById("w").innerHTML = possibleWord;
// // Space out possibleWord
// var originalLength = possibleWord.length;
// for (i = 0; i < originalLength; i++) {
//     possibleWord = [possibleWord.slice(0, i*2+1), ' ', possibleWord.slice(i*2+1)].join('');

// }


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
}