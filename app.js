console.log('Rock, Paper, Scissor Shoot...');
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

//store it in a variable
let computerChoice = getComputerChoice();

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
let humanChoice = getHumanChoice();

// round game variables
let humanWins = 0;
let computerWins = 0;

// create a if else statement to print to console if you won or lost
console.log('Computer Choice: ' + computerChoice);
console.log('Your Choice: ' + humanChoice);

if (humanChoice.localeCompare(computerChoice) == 0) {
	console.log('Looks like you tied');
} else if (humanChoice.localeCompare('rock') === 0) {
	if (computerChoice.localeCompare('paper') === 0) {
		console.log('You Lost');
	} else if (computerChoice.localeCompare('scissor') === 0) {
		console.log('You Won');
	}
} else if (humanChoice.localeCompare('paper') === 0) {
	if (computerChoice.localeCompare('scissor') === 0) {
		console.log('You Lost');
	} else if (computerChoice.localeCompare('rock') === 0) {
		console.log('You Won');
	}
} else {
	if (computerChoice.localeCompare('rock') === 0) {
		console.log('You Lost');
	} else if (computerChoice.localeCompare('paper') === 0) {
		console.log('You Won');
	}
}
