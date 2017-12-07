window.onload = function init(){



// document.onkeypress = function unhide (){
// 	var display = document.getElementByClassName("unhidden");

// 		if (display.className == "unhidden") {
// 			display.className == "hidden";
// 		} else {
// 			display.className == "unhidden";
// 		}
// 	}
var validLetter;
var prevGuessed;
var indexNum;
var choice; //key pressed
var specialChar = 0;//special character count in word
var guessesLeft = 9; //
//populate letter bank with buttons
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// grab div to hold letters
var lettersDiv = document.getElementById("letterBank");


//insert letters array into lettersDiv
 for (i = 0; i < letters.length; i++) {
          var buttonDiv = document.createElement("div");
          buttonDiv.innerHTML = letters[i];
          lettersDiv.appendChild(buttonDiv);  
          buttonDiv.id = "letter";
      }



//define word choices
var wordbank = [
["Marty McFly", "Dr. Emmett Brown", "Marvin Berry", "Biff Tannen", "Jennifer"],
["Great Scott!", "This is heavy", "What are you looking at butthead", "I hate manure!"],
["DeLorean", "Gray's Sports Almanac", "Manure"],
	];
//select category
 var selectCategory = wordbank[Math.floor(Math.random() * wordbank.length)];

//   function categoryShow() {
// 	if (selectCategory === wordbank[0]) {
// 		categoryChoice.innerHTML = "The category is Movie Characters";
// 	} else if (selectCategory === wordbank[1]) {
// 		categoryChoice.innerHTML = "The category is Movie Quotes";
// 	} else {
// 		categoryChoice.innerHTML = "The category is Important Movie Objects";

// }

// console.log(selectCategory);

//   }

//select word from category wordbank at random

var word = selectCategory[Math.floor(Math.random() * selectCategory.length)];
// word = word.replace(/\s/g, "-")//replace spaces with "-"
console.log(word);

var unsolvedWord = word.split("");//split word into letters
var guessArray = word.split("");//
var solveArray = word.split(""); //empty array for correct letters
console.log(word);
console.log(unsolvedWord);
console.log(guessArray);

for (var j = 0; j <unsolvedWord.length; j++) {
	if (unsolvedWord[j] === " "){
		guessArray[j] = " ";//display spaces in word
		specialChar += 1;// add to special character count
	} else if (unsolvedWord[j] === "'") {
		guessArray[j] === "'";//display ' in word
		specialChar += 1;// add to special character count
	} else if (unsolvedWord[j] === ".") {
		guessArray[j] === ".";//display . in word
		specialChar += 1;// add to special character count
	} else if (unsolvedWord[j] === "!") {
		guessArray[j] === "!";//display ! in word
		specialChar += 1;// add to special character count
	} else {
		guessArray[j] = "_";//display _ for all normal letters
	}
}
console.log(guessArray);
document.getElementById("wordspace").innerHTML = guessArray.join("");


var letterChoice = []; // array to store all letter selections, check for repeats
var wrongLetter = []; //array for wrong letters
var solveLetter = []; //array for correct letters
var usedLetters = document.getElementById("wrongGuesses"); // display of used letters
usedLetters.innerHTML = (letterChoice);
var lives = document.getElementById("guessesLeft");
lives.innerHTML = ("Incorrect guesses remaining: " +guessesLeft);


// game play

document.onkeypress = function(fn) {
	var choice = this.innerHTML;
	console.log(fn.key);
    var isLetter = letters.indexOf(fn.key);
    var prevGuessed = letterChoice.indexOf(fn.key);
    var matchCheck = solveArray.indexOf(fn.key);
	console.log(isLetter); 
    console.log(prevGuessed); 
	console.log(matchCheck);
	console.log(letterChoice);
	console.log(solveLetter);

	


	if (isLetter !== -1) { //key pressed is a valid letter 
		
			if (prevGuessed === -1) { //key pressed is not a repeat
				
				if (matchCheck < 0){ //letter is not in word
					wrongLetter.push(fn.key);
					usedLetters.push(fn.key);
					lives -= 1;
					
					if (lives < 1) {
						alert("Game over Doc");
					} 
					 else {
					for (var k = 0; k < word.length; k++) { //run key pressed through word
					
						if (word[k].innerHTML = (fn.key) ) {//if match, push to correct letter array
						solveLetter.push(fn.key);

						if((solveArray.length + specialChar) === (word.length)){
								prompt("you win!");
									} else {

									}
				}
			}
			
			} 
				
			} else
	
	 {
		
	}

} else {
	}
} else {
	alert ("not a valid entry");
}
}
}

	// function choiceAnalyze(){
		
	// }
	  
	
	// if (isLetter !== -1) {
	// 	compare();

	// 	if (matchCheck < 0) { 
	// 		wrongGuesses.push(event.key);
	// 		usedLetters.append(event.key);
	// 	} else {
	// 		compare();
	// 	}
	// } else { 
	// 	alert("not a valid input");
	// }
	// }

	// var compare = function () {
		
	// 	  var choice = (this.innerHTML);
	// 	  this.onkeydown = null;
	// 	  for (var k = 0; k < word.length; i++) {
	// 		if (word[k] === choice) {
	// 		  usedLetters[k].innerHTML = choice;
	// 		  isLetter.push(k);
	// 		} 
	// 	  }
	// 	  var check = (word.indexOf(choice));
	// 	  if (check === -1) {
	// 		guessesLeft -= 1;
	// 		letterCount += 1;
	// 		status();
	// 	  } else {
	// 	  }
	// 	}
	





