const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playSelection = btn.id;
    const computerSelection = getComputerChoice();
    result.textContent = playRound(playSelection, computerSelection);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    checkWinner();
  });
});

function checkWinner() {
  if (playerScore >= 5) {
    result.textContent = "Player is win";
    rest();
  } else if (computerScore >= 5) {
    result.textContent = "Computer is win";
    rest();
  }
}
function rest() {
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = 0;
  cScore.textContent = 0;
}
function getComputerChoice() {
  // generate a random number between 1 to 3 inclusive
  const choice = Math.floor(Math.random() * 3) + 1;
  // based on random number select a choice
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function capitalize(s) {
  // replace every first character to their upper case
  return s.replace(s[0], s[0].toUpperCase());
}

function playRound(playerSelection, computerSelection) {
  // convert player selection to lower case
  playerSelection = playerSelection.toLowerCase();
  let win = true;
  // determine the winner
  if (computerSelection === playerSelection) {
    return "Tie";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    win = false;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    win = false;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    win = false;
  }
  // based on winner increase the score of each player
  if (win) {
    playerScore++;
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
  } else {
    computerScore++;
    return `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
  }
}

let playerScore = 0,
  computerScore = 0;
