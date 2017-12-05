window.onload = function init(){



// document.onkeypress = function unhide (){
// 	var display = document.getElementByClassName("unhidden");

// 		if (display.className == "unhidden") {
// 			display.className == "hidden";
// 		} else {
// 			display.className == "unhidden";
// 		}
// 	}

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
var blankSpace = "";
for (var j = 0; j < word.length; j++) {
	// var specialChar = word.charAt(i);
	// if (specialChar === " " || specialChar === "/'" || specialChar === "-"){
	// 	blankSpace += x;
	// } else {
		unsolvedWord.push("_");
		wordspace.innerHTML = unsolvedWord.join(" ");
	}

var remainingGuesses = 10;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
document.getElementById("wrongGuesses").innerHTML = remainingGuesses;

wrongGuesses = [];
var guess = document.addEventListener('keydown', function() {
			alert("key pressed");
		});
    	// for (k = 0; k < word.length; k++) {
    	// 	if (word.indexOf(guess) === -1) {
    	// 		wrongGuesses.push(guess);
    	// 		document.getElementById("wrongGuesses").innerHTML += guess;
    	// 		remainingGuesses--;
    	// 	} else {
    	// 		for (var l = 0; l < word.length; l++) {
    	// 			if (word[l] === guess) {
    	// 				unsolvedWord[k] = guess;
//     				}
//     			}
// }
//     		// }
//   }

    
//    }); 


 



// document.onkeypress = function(keyPressed) {
// var keyPressed = keyPressed || window.event,
// charCode = keyPressed.keyCode || keyPressed.which,
// lettersGuessed = String.fromCharCode(charCode);

// wrongGuesses = [];
//  document.getElementById("wrongGuesses").innerHTML += lettersGuessed;
//  document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
// 	function displayToGuess() {
//  	pattern=""
//  	for(k = 0; k < word.length; k++) {
//   		if(keyCode.indexOf(word.charAt(k)) != -1)
//    		pattern += (unsolvedWord.charAt(k)+" ")
//   		else pattern += "_ "
//  	}
// }


// $("#LearnStar").live("keypress",function(e)
// {
//     var s = String.fromCharCode(e.which);
//     if (s.match(/[a-zA-Z\.]/))
//         console.log(s + ' is a match!');
// });
       

// if (word.indexOf(keyPressed) != -1){ // if the character is found
//   for (var k = 0; k < word.length; k ++){ // loop on all characters
//      if (word[i] == keyPressed) // if this is an occurance
//        unsolved[i] = word[i];
//   }
// }else{
//   // wrong choice
//   remainingGuesses--;
// }
// }

// if (word.indexOf(keyPressed) === -1){//letter is not in word
// 	wrongGuesses.push("keyPressed"); //update letters guessed
// 	} else {//letter is in word
// 		//replace underscore with the letter
// 		for (var k = 0; k < word.length; k++){
// 			if (word[k] === keyPressed) {
// 				unsolvedWord[k] = keyPressed;
// 			} else {
// 				remainingGuesses--;

// 			if (remainingGuesses === 0) {
// 			alert("you lose");
// 			}
// }
// }
// }
// }


// }



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