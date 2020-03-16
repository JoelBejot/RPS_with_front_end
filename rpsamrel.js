function computerPlay() {
    let handOptions = ["ROCK", "PAPER", "SCISSORS"];
    return handOptions[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        msg.innerHTML = `You: <span class="highlights">${playerSelection}</span> &nbsp&nbsp Computer: <span class="highlights">${computerSelection}</span>`;
        msg2.textContent = `You win! Rock beats Scissors.`;
        playerScore++;
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        msg.innerHTML = `You: <span class="highlights">${playerSelection}</span> &nbsp&nbsp Computer: <span class="highlights">${computerSelection}</span>`;
        msg2.textContent = `You lose! Rock beats Scissors.`;
        computerScore++;
    }

    if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        msg.innerHTML = `You: <span class="highlights">${playerSelection}</span> &nbsp&nbsp Computer: <span class="highlights">${computerSelection}</span>`;
        msg2.textContent = `You win! Scissors beats Paper.`;
        playerScore++;
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        msg.innerHTML = `You: <span class="highlights">${playerSelection}</span> &nbsp&nbsp Computer: <span class="highlights">${computerSelection}</span>`;
        msg2.textContent = `You lose! Scissors beats Paper.`;
        computerScore++;
    }

    if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        msg.innerHTML = `You: <span class="highlights">${playerSelection}</span> &nbsp&nbsp Computer: <span class="highlights">${computerSelection}</span>`;
        msg2.textContent = `You win! Paper beats Rock.`;
        playerScore++;
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        msg.innerHTML = `You: <span class="highlights">${playerSelection}</span> &nbsp&nbsp Computer: <span class="highlights">${computerSelection}</span>`;
        msg2.textContent = `You lose! Paper beats Rock.`;
        computerScore++;
    }

    if(playerSelection === computerSelection) {
        msg.innerHTML = `You: <span class="highlights">${playerSelection}</span> &nbsp&nbsp Computer: <span class="highlights">${computerSelection}</span>`;
        msg2.textContent = `Draw! You both played the same.`;
    }
    roundsPlayed++;
    
}

function game() {
    enableplaybtns();
    start.disabled = true;
    played === true ? playRound(playerSelection) : null;
    scoreboard.innerHTML = `You: <span class="highlights">${playerScore}/5</span> vs Computer: <span class="highlights">${computerScore}/5</span>`;
    round.innerHTML = `Rounds: = <span class="highlights">${roundsPlayed}</span>`;
    if(playerScore >= 5) {
        scoreboard.textContent = 'You beat a bot. Hooray? Jkjk well done! :D';
        resetGame();
    }
    else if(computerScore >= 5) {
        scoreboard.textContent = 'LMAO! You lost the game to a bot!';
        resetGame();
    }
}

function resetGame() {
    msg.innerHTML = '&nbsp';
    msg2.innerHTML = '&nbsp';
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    disableplaybtns();
    played = false;
    start.textContent = 'Play again!';
    start.disabled = false;
}

function disableplaybtns() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function enableplaybtns() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

const rock = document.querySelector('#ROCK');
const paper = document.querySelector('#PAPER');
const scissors = document.querySelector('#SCISSORS');
const start = document.querySelector('#START');
const msg = document.querySelector('#msg');
const msg2 = document.querySelector('#msg2');
const scoreboard = document.querySelector('#scoreboard');
const round = document.querySelector('#round');

let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let played = false;

msg.setAttribute('style', 'white-space: pre;');
msg2.setAttribute('style', 'white-space: pre;');
scoreboard.setAttribute('style', 'white-space:pre;');

msg.textContent = `Start the game. Get 5 wins to win!`;

disableplaybtns();

rock.addEventListener('click', () => { 
    playerSelection = 'ROCK';
    played = true;
    game();
});
paper.addEventListener('click', () => { 
    playerSelection = 'PAPER';
    played = true;
    game();
});
scissors.addEventListener('click', () => { 
    playerSelection = 'SCISSORS';
    played = true; 
    game();
});

start.addEventListener('click', () => { game() });
