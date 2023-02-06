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
  // change hands
  changeImage(playerSelection, computerSelection);
  playerHand.classList.remove("winner");
  computerHand.classList.remove("winner");
  // convert player selection to lower case
  playerSelection = playerSelection.toLowerCase();
  let win = true;
  // determine the winner
  if (computerSelection === playerSelection) {
    return "Tie Game";
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
    pScore.textContent = playerScore;
    playerHand.classList.add("winner");
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
  } else {
    computerScore++;
    cScore.textContent = computerScore;
    computerHand.classList.add("winner");
    return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
  }
}

function changeImage(playerSelection, computerSelection) {
  playerHand.src = `./img/${playerSelection}.png`;
  playerHand.style.display = "block";
  computerHand.src = `./img/${computerSelection}.png`;
  computerHand.style.display = "block";
}
function checkWinner() {
  if (playerScore >= 5) {
    modal.style.display = "block";
    modalText.textContent = "Player Win";
    container.classList.add("new");
  } else if (computerScore >= 5) {
    modal.style.display = "block";
    modalText.textContent = "Computer Win";
    container.classList.add("new");
  }
}

function reset() {
  modal.style.display = "none";
  container.classList.remove("new");
  playerScore = 0;
  computerScore = 0;
  modalText.textContent = "";
  result.textContent = "";
  pScore.textContent = 0;
  cScore.textContent = 0;
  playerHand.style.display = "none";
  computerHand.style.display = "none";
}

let playerScore = 0;
let computerScore = 0;
const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".btns button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal p");
const restButton = document.querySelector(".rest");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = button.id;
    result.textContent = playRound(playerSelection, computerSelection);
    checkWinner();
  });
});
restButton.addEventListener("click", reset);
