//Start of game, randomly generated #
// 4 crystals  - each one worth  some #
// Match the # , you win, go over-->you lose
// Total score gets set back to 0
// New # generated to restart game



$(document).ready(function(){
	//declare variables
	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;
	var wins;
	var losses;
	var randomNum;
	var guessNum;

//inital values to display
	
	wins = 0;
	losses = 0;
	crystal1 = 1;
	crystal2 = 5;
	crystal3 = 10;
	crystal4 = 2;
	randomNum = 20;

	$("#random-num").html(randomNum);

	// $("#operator").html(operator);

//on button click

console.log("Testing");







});
//on game load generate a random # between 19-120 and display in random-num
//assign a random number between 1-12 for each crystal
//on button click, get value of button and add it to current guessNum
//check guessNum == randomNum, if > randomNum then add 1 to lossess, if = then add 1 to wins
//reset guessNum
//generate next random numbers for guess and crystal buttons




