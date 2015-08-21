$(document).ready(function(){
	var computerChoice = Math.floor((Math.random() * 100));
	
});


var playerGuess = document.getElementById("guess").value;

function tenTries(){
	for(var i = 1; i <= 10; i++){
		if(i > 0){
			alert("You have " + i + " guesses left!");
		} else {
			alert("You're out of guesses!");
			//I want to stop the whole game at this point
			break;

		}
	}
}

function check1to100() {
	if(playerGuess >= 1 && playerGuess <= 100){
		hotOrCold(computerChoice, playerGuess);
	} else{
		alert("Please pick a number between 1 and 100!");
	}
};

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
}
