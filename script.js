let round = 0;
let cScore = 0;
let pScore = 0;
function computerPlay() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let select = '';
    switch(randomNumber) {
        case 1:
            select = 'Rock';
            break;
        case 2:
            select = 'Scissors';
            break;
        case 3:
            select = 'Paper';
            break;
    }
    return select;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    let youWin = true;
    let result = ''
    if(computerSelection === playerSelection) {
        return 'Tie Game';
    }
    else if(computerSelection == 'rock' && playerSelection == 'scissors') {
        youWin = false;
    } else if(computerSelection == 'scissors' && playerSelection == 'paper') {
        youWin = false;
    } else if(computerSelection == 'paper' && playerSelection == 'rock') {
        youWin = false;
    }
    computerSelection = computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1);
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1);
    if(youWin) {
        pScore++;
        result =   `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        cScore++;
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    return result;
}


const roundDiv = document.querySelector('.round');
const roundNumber = document.createElement('span');
const buttons = document.querySelectorAll('button');
const button = document.querySelector('button');
const text = document.querySelector('.text');
const winer = document.querySelector('.winer');
const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const computerScoreSpan = document.createElement('span');
const playerScoreSpan = document.createElement('span');

roundNumber.textContent = round;
roundDiv.appendChild(roundNumber);
computerScoreSpan.textContent = cScore;
playerScoreSpan.textContent = pScore;
computerScore.appendChild(computerScoreSpan);
playerScore.appendChild(playerScoreSpan);



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        winer.textContent = '';
        winer.style.backgroundColor = '#181818';
        round++;
        roundNumber.textContent = round;
        roundDiv.appendChild(roundNumber);
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        text.textContent = playRound(playerSelection, computerSelection);
        computerScoreSpan.textContent = cScore;
        playerScoreSpan.textContent = pScore;
        computerScore.appendChild(computerScoreSpan);
        playerScore.appendChild(playerScoreSpan);
        if(cScore == 5){
            winer.style.backgroundColor = 'red';
            winer.textContent = 'The Winer is: Computer';
            round = cScore = pScore = 0;
        }
        else if(pScore == 5) {
        winer.style.backgroundColor = 'red';
        winer.textContent = 'The Winer is: Human';
        round = cScore = pScore = 0;
        }
    });
});


