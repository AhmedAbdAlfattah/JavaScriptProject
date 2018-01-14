var words = [
["T", "R", "E", "E"],
  ["C","A","K","E"],
  ["H","O","M","E"],
  ["C","A","R"],
  ["M","I","L","K"],
  ["E","L","E","P","H","A","T"],
  ["C","A","T"],
  ["F","R","O","G"],
  ["L","I","O","N"],
  ["Z","E","B","R","A"],
  ["R","A","B","B","I","T"],
  ["L","E","M","O","N"],
  ["F","R","U","I","T"],
  ["O","R","A","N","G","E"],
  ["G","R","A","P","E"],
  ["M","A","N","G","O"]  
]
var myPix = new Array("images/tree.png","images/cake.jpg","images/home.png","images/car.jpg",
"images/milk.jpg","images/elephant.jpg","images/cat.jpg","images/frog.jpg","images/lion.jpg",
"images/zepra.jpg","images/rabbit.jpg","images/lemon.jpg","images/fruit.png","images/orange.jpg",
"images/grape.jpg","images/mango.jpg");
var random = Math.floor((Math.random()*(words.length))); 

var selectedWord = words[random]; // the word to guess will be chosen from the array above
var dashWords = new Array(selectedWord.length);
var error = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < dashWords.length; i++){
	dashWords[i] = "_ ";
}

document.getElementById("mypic").src = myPix[random];

// prints the guessfield
function printWord(){
	for (var i = 0; i < dashWords.length; i++){
	var fields = document.getElementById("fields");
	var Letter = document.createTextNode(dashWords[i]);
	fields.appendChild(Letter);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
  function guess(){
	var target1 = event.target.id ;
    
    //r lower = target.id;
    var upper = document.getElementById(target1).getAttribute("value");
    console.log(target1);

    document.getElementById(target1).style.visibility="hidden";


	//var f = document.rateformular; 
	//var b = f.elements["ratezeichen"];

	var character = upper; // the letter provided by the user
	character = character.toUpperCase();
	for (var i = 0; i < selectedWord.length; i++){
		if(selectedWord[i] === character){
			dashWords[i] = character + " ";
			var winner = true;
		}
	//b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var fields = document.getElementById("fields");
	fields.innerHTML=""; 
	printWord();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!winner){
		var advisedLetters = document.getElementById("advisedLetters");
		var Letter = document.createTextNode(" " + character);
		advisedLetters.appendChild(Letter); 
		error++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
	}
	
	//checks if all letters have been found
	var finished = true;
	for (var i = 0; i < dashWords.length; i++){
		if(dashWords[i] === "_ "){
			finished = false;
		}
	}
	if(finished){
		window.alert("You win!");
		//myFunction();
	}
	
	//once you got six wrong letters, you lose
	if(error === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}
function myFunction() {
    var popup = document.getElementById("myPopup");

    popup.classList.toggle("show");
}
function init(){
	printWord();
}

window.onload = init;