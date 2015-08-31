$(document).ready(function(){
	checkRepeats();
	getPlayerGuess();
	hint();
	resetGame();
	
});


var computerChoice = Math.floor((Math.random() * 100));

function hint(){
	$('#hint').on('click',function(){
		if(computerChoice > 94){
		//Hint button should alert computerChoice - 5
			alert("Try something in the neighborhood of " + (computerChoice - 5));
		} else {
		//Hint button should alert computerChoice + 5
			alert("Try something in the neighborhood of " + (computerChoice + 5));
	}
	});
}
var counter = 0;
var guessArray = [];

function checkRepeats(){
	$('#guess').on('click', function(){
	var playerGuessInput = document.getElementById("playerGuess").value;
	for(var i = 0; i < guessArray.length; i++){
		if(playerGuessInput === guessArray[i]){
			alert("You've guessed that before!");
		}
	}	
	})
	
}

function getPlayerGuess(){
	$('#guess').on('click', function(){
		var playerGuessInput = document.getElementById("playerGuess").value;
		if(playerGuessInput < 1 || playerGuessInput > 100){
			alert("Please pick a number between 1 and 100!");
			} else {
				if(playerGuessInput - computerChoice <= 9 && playerGuessInput - computerChoice > 0){
					$('.hot').append(playerGuessInput + '\n');
					counter++;
					guessArray.push(playerGuessInput);
					alert('Getting warmer! Guess a little lower!');
				} else if( computerChoice - playerGuessInput <= 9 && computerChoice - playerGuessInput > 0){
					$('.hot').append(playerGuessInput + '\n')
					counter++;
					guessArray.push(playerGuessInput);
					alert('Getting warmer! Guess a little higher!');
				}  else if( computerChoice - playerGuessInput > 9){
					$('.cold').append(playerGuessInput + '\n');
					counter++;
					guessArray.push(playerGuessInput);
					alert('Very cold! Guess a higher number!');
				} else if( playerGuessInput - computerChoice > 9){
					$('.cold').append(playerGuessInput + '\n');
					counter++;
					guessArray.push(playerGuessInput);
					alert('Very cold! Guess a lower number!');
				} else{
					$('body').css('background-image', 'url(images/sunset.jpg)');
					counter++;
					guessArray.push(playerGuessInput);
					alert('CONGRATULATIONS YOU GUESSED THE NUMBER!');
				}
			
		}
		var numLeft = 5 - counter;
		$('.numGuesses').append(numLeft + '\n');
		if(numLeft == 0){
			alert("Game Over! Let's play again!");
			location.reload();
		}
	});
}


		

function resetGame(){
	$('#startNew').on('click', function(){
		location.reload();
	});
}

/*
function hotOrCold(){
	var computerChoice = Math.floor((Math.random() * 100));
	var playerGuessInput = document.getElementById("playerGuess").value;

	if(playerGuessInput - computerChoice <= 9){
		$('.hot').append(playerGuessInput);
		alert('Getting warmer! Guess a little lower!');
	} else if( computerChoice - playerGuessInput <= 9){
		$('.hot').append(playerGuessInput);
		alert('Getting warmer! Guess a little higher!');
	}  else if( computerChoice - playerGuessInput > 9){
		$('.cold').append(playerGuessInput);
		alert('Pretty cold! Guess a higher number!');
	} else if( playerGuessInput - computerChoice > 9){
		$('.cold').append(playerGuessInput);
		alert('Pretty cold! Guess a higher number!');
	} 

}*/



//after someone presses the enter key, I want to have the guess be stored and evaluated

/*




function tenTries(){
	for(var i = 1; i <= 10; i++){
		if(i > 0){
			alert("You have " + i + " guesses left!");
		} else {
			alert("You're out of guesses!");
			//I want to stop the whole game at this point

		}
	}
}


function hotOrCold(computer, player){
	if(computer - player <= 9){
		alert("Hot! You're very close - try a number that's a little higher!");
	} else if (player - computer <= 9){
		alert("Hot! You're very close - try a number that's a little lower!");
	} else if (player - computer > 10) {
		alert("Cold! You're pretty far away - try a number that's lower!");
	} else if (computer - player > 10){
		alert("Cold! You're pretty far away - try a number that's higher!");
	} else if(computer === player){

	}
}*/


//use .append() to store the guesses that the player has guessed
