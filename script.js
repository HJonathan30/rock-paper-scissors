function computerPlay () {
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 0) {
        return 'Rock';
    } else if (randomNum === 1) {
        return 'Paper';
    } else if (randomNum === 2) {
        return 'Scissors';
    }
}

function userPlay() {
    let playerSelect = prompt("Rock, Paper or Scissors. Which one do you choose?");
    return playerSelect;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'Draw';
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'Draw';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'Draw';
    }
    return 1
}

function game() {
    for(let i = 0; i < 5; i++) {
        let player = userPlay();
        console.log(player);
        let computer = computerPlay();
        console.log(computer);

        console.log(playRound(player, computer))
    }
}

game();
