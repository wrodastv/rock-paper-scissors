console.log('Rock, Paper, Scissor Shoot...');
let humanWins = 0;
let computerWins = 0;
while (computerWins < 5 && humanWins < 5) {
	//Computer Choice
	function getComputerChoice() {
		let i = Math.round(Math.random() * 2) + 1;

		let choice;
		if (i === 1) {
			choice = 'rock';
		} else if (i === 2) {
			choice = 'paper';
		} else if (i === 3) {
			choice = 'scissor';
		}
		return choice;
	}

	function getHumanChoice() {
		let choice;
		let i;
		while (i != 0) {
			choice = prompt('Rock, Paper or Scissor?');
			choice = choice.toLocaleLowerCase();

			if (choice.localeCompare('rock') === 0) {
				i = 0;
			} else if (choice.localeCompare('paper') === 0) {
				i = 0;
			} else if (choice.localeCompare('scissor') === 0) {
				i = 0;
			} else {
				i = 1;
			}
		}
		return choice;
	}

	// create a if else statement to print to console if you won or lost
	console.log('Computer Choice: ' + computerChoice);
	console.log('Your Choice: ' + humanChoice);

	if (humanChoice.localeCompare(computerChoice) == 0) {
		console.log('Looks like you tied');
	} else if (humanChoice.localeCompare('rock') === 0) {
		if (computerChoice.localeCompare('paper') === 0) {
			console.log('You Lost');
			computerWins++;
		} else if (computerChoice.localeCompare('scissor') === 0) {
			console.log('You Won');
			humanWins++;
		}
	} else if (humanChoice.localeCompare('paper') === 0) {
		if (computerChoice.localeCompare('scissor') === 0) {
			console.log('You Lost');
			computerWins++;
		} else if (computerChoice.localeCompare('rock') === 0) {
			console.log('You Won');
			humanWins++;
		}
	} else {
		if (computerChoice.localeCompare('rock') === 0) {
			console.log('You Lost');
			computerWins++;
		} else if (computerChoice.localeCompare('paper') === 0) {
			console.log('You Won');
			humanWins++;
		}
	}
	console.log('Computer Wins: ' + computerWins);
	console.log('Your Wins: ' + humanWins);
}

if (computerWins > humanWins) {
	console.log('You have lost against the computer');
} else {
	console.log('You have won against the computer');
}

console.log('Thanks for playing');
