function computerPlay() {
    let randomNumber = Math.ceil(Math.random() * 3);
    switch(randomNumber) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase();
    cs = computerSelection.toLowerCase();
    if(cs === ps) 
        return 'Tie game!'
    else if(cs == 'rock' && ps == 'scissors') 
        return `You Lose! ${cs} beats ${ps}`;
    else if (cs == 'scissors' && ps == 'paper')
        return `You Lose! ${cs} beats ${ps}`;
    else if (cs == 'paper' && ps == 'rock') 
        return `You Lose! ${cs} beats ${ps}`;
    
    else 
        return `You Win! ${ps} beats ${cs}`;
}

function game() {
    let round = 1;
    while(round <= 5) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Enter a selection');
        console.log(playRound(playerSelection, computerSelection));
        round++;
    }
}

game();
