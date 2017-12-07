window.onload = function init(){

var choice; //key pressed
var specialChar = 0;//special character count in word
var guessesLeft = 9; //
var score = 0; // total wins
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
// 		var showCat = document.getElementById("categoryChoice");
// 		showCat.innerHTML = "The category is Movie Characters";
// 	} else if (selectCategory === wordbank[1]) {
// 		var showCat = document.getElementById("categoryChoice");
// 		showCat.innerHTML = "The category is Movie Quotes";
// 	} else {
// 		var showCat = document.getElementById("categoryChoice");
// 		showCat.innerHTML = "The category is Important Movie Objects";
		

// }


//   }

//select word from category wordbank at random

var word1 = selectCategory[Math.floor(Math.random() * selectCategory.length)];
// word = word.replace(/\s/g, "-")//replace spaces with "-"
console.log(word1);
word = word1.toLowerCase();

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
usedLetters.innerHTML = (wrongLetter);
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
			letterChoice.push(fn.key);
			// var newLetter = letters[isLetter];
			// newLetter.id = "selected";  tried to change letter appearance after selection
		
			if (prevGuessed === -1) { //key pressed is not a repeat
				
				if (matchCheck < 0){ //letter is not in word
					wrongLetter.push(fn.key);
					document.getElementById("wrongGuesses").innerHTML = ("Incorrect letters guessed: " + wrongLetter.join(""));
					guessesLeft -= 1;
					lives.innerHTML = ("Incorrect guesses remaining: " + guessesLeft);
					
					if (guessesLeft < 1) {
						alert("Game over Doc");
						init();
					} }
					 else {
					 for (var k = 0; k < solveArray.length; k++) { //run key pressed through word
						if (solveArray[k] === fn.key ) {//if match, push to correct letter array
							guessArray[k] = solveArray[k];
							solveLetter.push(fn.key);
							document.getElementById("wordspace").innerHTML = guessArray.join("");
							console.log(guessArray);
							if(solveLetter.length === guessArray.length){
								alert("you win!");
								score += 1;
								var wins = document.getElementById("scoreboard");
								wins.innerHTML = ("Wins: " + score);
							} else {

									}
						} else {

								}
							}
			
						} 
				
			} else
	
	 {
		
	}

} else {
	alert ("not a valid entry");
} 
}
}




	





