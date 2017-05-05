//Start of game, randomly generated #
// 4 crystals  - each one worth  some #
// Match the # , you win, go over-->you lose
// Total score gets set back to 0
// New # generated to restart game
//Crystal random # 1-12
//Guess # 19-120




$(document).ready(function(){
	//declare variables
	var crystal1 = [1, 5, 9];
	var crystal2 = [2, 6, 10];
	var crystal3 = [3, 7, 11];
	var crystal4 = [4, 8, 12];
	var blueCry;
	var purpleCry;
	var redCry;
	var greenCry;
	var wins;
	var losses;
	var randomNum;
	var guessNum;
	var gamestart;
	var crystalNum;
	var matchNum = 0;

//inital values to display for score
	
	wins = 0;
	losses = 0;
	$("#wins").append(wins);
	$("#losses").append(losses);

//on document load call functions to generate Computer # and assign crystals a #
	
	randomComputerNum();
	//console.log("outside the function: " + guessNum);
	crystalVal();

//on gem button click increment the value of guessNum
	
	$(".crystal").on("click", function(){
		//make sure message display is empty at the beginning of each game
		$("#message").html("");

		guessNum = $(this).attr("value");  //get the value of the crystal button pressed
		matchNum += parseInt(guessNum);		//convert to an integer and increment the current guess value

		console.log("number guessed is:  " + (matchNum));
		$(".guess-num").html(matchNum);

		//check matchNum == randomNum, if > randomNum then add 1 to losses, if = then add 1 to wins
		if (matchNum==randomNum) {
			console.log("You win!");
			wins++;
			$("#message").html("You win! " + matchNum + " = " + randomNum);
			$("#wins").html("Wins:  " + wins);
			gamereset();

		}

		else if (matchNum>randomNum) {
			console.log("You Lose!");
			losses++;
			$("#message").html("You lose! " + matchNum + " > " + randomNum);
			$("#losses").html("Losses: " +losses);
			gamereset();
		}
	})


//functions
//generate random # between 19-120 for the guessNum
function randomComputerNum () {
	randomNum = Math.floor(Math.random()*120) + 19;
	$("#random-num").html(randomNum);
	//console.log("in the function:  " + guessNum);
	return randomNum;
}

//generate random#s between 1-12 for each crystal out of the array passed to it
function crystalRandomNum (crystalArr) {
	crystalNum = crystalArr[Math.floor(Math.random()*crystalArr.length)];
	return crystalNum;
}

//assign a random number between 1-12 for each crystal
function crystalVal () {
	crystalRandomNum(crystal1);
	var blueCry = crystalNum;
	$("#button-1").val(blueCry);

	crystalRandomNum(crystal2);
	var purpleCry = crystalNum;
	$("#button-2").val(purpleCry);

	crystalRandomNum(crystal3);
	var redCry = crystalNum;
	$("#button-3").val(redCry);

	crystalRandomNum(crystal4);
	var greenCry = crystalNum;
	$("#button-4").val(greenCry);

	console.log("blue: " + blueCry);
	console.log("purple: " + purpleCry);
	console.log("red:  " + redCry);
	console.log("green:  " + greenCry);
}

//game restart after win or loss
function gamereset() {
	$(".guess-num").html("");  //empty number guessed from display after win or loss
	matchNum = 0;  //reset previous guess back to 0
	randomComputerNum();  //generate new random #
	crystalVal();		//generate new values for crystals
}

});





