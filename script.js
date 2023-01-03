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

function game() {
  // play 5 round
  for (let i = 1; i <= 5; i++) {
    // get computer choice
    const computerSelection = getComputerChoice();
    // get player choice
    let playerSelection = prompt("Enter your choice(rock, paper, scissors)");
    while (!"(rock, paper, scissors)".includes(playerSelection.toLowerCase())) {
      alert("Choose valid choice");
      playerSelection = prompt("Enter your choice(rock, paper, scissors)");
    }
    console.log(playRound(playerSelection, computerSelection));
  }
  // determine the winner
  if (playerScore > computerScore) {
    alert("You win");
  } else {
    alert("You lose");
  }
}
let playerScore = 0,
  computerScore = 0;
game();
