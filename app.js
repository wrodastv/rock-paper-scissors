let humanScore = 0;
let computerScore = 0;
let gameRounds = 0;
let gameOver = false;
//Computer Choice
function getComputerChoice() {
	let i = Math.round(Math.random() * 2) + 1;
	return i;
}

// Elements
const bodyEl = document.querySelector('body');

const scoreEl = document.querySelector('.score');
const originalScoreEl = scoreEl.innerHTML;
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const choicesEl = document.querySelector('.choices');
const originalChoicesEl = choicesEl.innerHTML;
const buttonYes = document.createElement('button');
buttonYes.classList.add('btn', 'btn-yes');
buttonYes.textContent = 'Yes';
const buttonNo = document.createElement('button');
buttonNo.classList.add('btn', 'btn-no');
buttonNo.textContent = 'No';
let selection = 0;
const choices = document.querySelectorAll('img');
choices.forEach((choice) => {
	choice.addEventListener('click', () => {
		if (choice.className == 'rock') {
			selection = 1;
			playGame();
		} else if (choice.className == 'paper') {
			selection = 2;
			playGame();
		} else if (choice.className == 'scissor') {
			selection = 3;
			playGame();
		}
	});
});

function playRound(humanSelection, computerSelection) {
	if (humanSelection === computerSelection) {
		bodyEl.style.backgroundColor = 'orange';
	} else if (humanSelection === 1) {
		if (computerSelection === 2) {
			bodyEl.style.backgroundColor = 'red';
			computerScore++;
		} else if (computerSelection === 3) {
			bodyEl.style.backgroundColor = 'green';
			humanScore++;
		}
	} else if (humanSelection === 2) {
		if (computerSelection === 3) {
			bodyEl.style.backgroundColor = 'red';
			computerScore++;
		} else if (computerSelection === 1) {
			bodyEl.style.backgroundColor = 'green';
			humanScore++;
		}
	} else if (humanSelection === 3) {
		if (computerSelection === 1) {
			bodyEl.style.backgroundColor = 'red';
			computerScore++;
		} else if (computerSelection === 2) {
			bodyEl.style.backgroundColor = 'green';
			humanScore++;
		}
	}
}

function checkWinner() {
	if (gameRounds === 5) {
		if (humanScore > computerScore) {
			choicesEl.textContent =
				'You Win! Final Score: You: ' + humanScore + ' - Computer: ' + computerScore;
			scoreEl.textContent = 'Play Again?';
			scoreEl.append(buttonYes, buttonNo);
			bodyEl.style.backgroundColor = '#343434';
			gameOver = true;
		} else {
			choicesEl.textContent =
				'You Lose! Final Score: You: ' + humanScore + ' - Computer: ' + computerScore;
			scoreEl.textContent = 'Play Again?';
			scoreEl.append(buttonYes, buttonNo);
			bodyEl.style.backgroundColor = '#343434';
			gameOver = true;
		}
	}
}

function playGame() {
	const computerChoice = getComputerChoice();
	playRound(selection, computerChoice);
	gameRounds++;
	playerScoreEl.textContent = 'Player: ' + humanScore;
	computerScoreEl.textContent = 'Computer: ' + computerScore;

	checkWinner();
}

buttonYes.addEventListener('click', () => {
	window.location.reload();
});
buttonNo.addEventListener('click', () => {
	choicesEl.textContent = "GoodBye! Let's Play Again!";
});
