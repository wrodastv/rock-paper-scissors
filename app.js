console.log('Rock, Paper, Scissor Shoot...');
let humanScore = 0;
let computerScore = 0;
//Computer Choice
function getComputerChoice() {
	let i = Math.round(Math.random() * 2) + 1;
	return i;
}

function getHumanChoice() {
	let choice;
	let i = 0;
	while (i === 0) {
		choice = prompt('Rock, Paper or Scissor?');
		choice = choice.toLocaleLowerCase();

		if (choice.localeCompare('rock') === 0) {
			i = 1;
		} else if (choice.localeCompare('paper') === 0) {
			i = 2;
		} else if (choice.localeCompare('scissor') === 0) {
			i = 3;
		} else {
			i = 0;
			console.log('You must choose between Rock Paper or Scissor');
		}
	}
	return i;
}

function playRound(humanSelection, computerSelection) {
	if (humanSelection === computerSelection) {
		console.log('You have Tied');
	} else if (humanSelection === 1) {
		if (computerSelection === 2) {
			console.log('You Lost! Paper beats Rock');
			computerScore++;
		} else if (computerSelection === 3) {
			console.log('You Won! Rock beats Scissor');
			humanScore++;
		}
	} else if (humanSelection === 2) {
		if (computerSelection === 3) {
			console.log('You Lost! Scissors Beat Paper');
			computerScore++;
		} else if (computerSelection === 1) {
			console.log('You Won! Paper Beats Rock');
			humanScore++;
		}
	} else if (humanSelection === 3) {
		if (computerSelection === 1) {
			console.log('You Lost! Rock Beats Scissors');
			computerScore++;
		} else if (computerSelection === 2) {
			console.log('You Won! Scissors beat paper');
			humanScore++;
		}
	}
}

function playGame() {
	let gameRounds = 0;
	let humanChoice;
	let computerChoice;
	while (gameRounds < 5) {
		humanChoice = getHumanChoice();
		computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);

		console.log('Computer Score: ' + computerScore);
		console.log('Your Score: ' + humanScore);
		gameRounds++;
	}
}

playGame();

console.log('Computer Final Score: ' + computerScore);
console.log('Your Final Score: ' + humanScore);

if (computerScore > humanScore) {
	console.log('Computer Wins!!');
} else if (humanScore > computerScore) {
	console.log('You Win!!');
} else {
	console.log('You Tied. Great Effort');
}

console.log('Thanks for playing');
