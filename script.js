function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
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
  return s.replace(s[0], s[0].toUpperCase());
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let win = true;
  if (computerSelection === playerSelection) {
    return "Tie";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    win = false;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    win = false;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    win = false;
  }
  if (win) {
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
  } else {
    return `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
  }
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));
