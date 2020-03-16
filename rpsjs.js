function computerPlay() {
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    switch (playerSelection) {
        case "rock":
            msg.innerHTML = "You chose rock. The computer chose " + computerSelection + ".";

            switch (computerSelection) {
                case "rock":
                    result = ++ties;
                    msg2.textContent = "You tie this round.";
                    break;
                case "paper":
                    result = ++losses;
                    msg2.textContent = "Computer wins! Paper covers rock.";
                    break;
                case "scissors":
                    result = ++wins;
                    msg2.textContent = "You win! Rock crushes scissors.";
                    break;
            }
            break;
        
        case "paper":
            msg.innerHTML = "You chose paper. The computer chose " + computerSelection + ".";
            switch (computerSelection) {
                case "rock":
                    result = ++wins;
                    msg2.textContent = "You win! Rock crushes scissors.";
                    break;
                case "paper":
                    result = ++ties;
                    msg2.textContent = "You tie this round.";
                    break;
                case "scissors":
                    result = ++losses;
                    msg2.textContent = "Computer wins! Paper covers rock.";
                    break;
            }
            break;
        case "scissors":
            msg.innerHTML = "You chose scissors. The computer chose " + computerSelection + ".";
            switch (computerSelection) {
                case "rock":
                    result = ++losses;
                    msg2.textContent = "Computer wins! Paper covers rock.";
                    break;
                case "paper":
                    result = ++wins;
                    msg2.textContent = "You win! Rock crushes scissors.";
                    break;
                case "scissors":
                    result = ++ties;
                    msg2.textContent = "You tie this round.";
                    break;
            }
        break;
        }
        return result;
    }

function game() {
    playRound(playerSelection);
    scoreboard.textContent = "You: " + wins + " Computer: " + losses + " Ties: " + ties;
    if (wins == 5) {
        winner.textContent = "You win the game! Congratulations! Play again?"
        reloadButton.innerHTML = "Reload";
        document.body.appendChild(reloadButton);
    }
    else if (losses == 5) {
        winner.textContent = "The computer wins the game! Better luck next time. Play again?";
        reloadButton.innerHTML = "Reload";
        document.body.appendChild(reloadButton);
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const msg = document.querySelector('#msg');
const msg2 = document.querySelector('#msg2');
const scoreboard = document.querySelector('#scoreboard');
const winner = document.querySelector('#winner');
const reloadButton = document.createElement("BUTTON");

var wins = 0;
var losses = 0;
var ties = 0;
var playerSelection;
var result = "";

msg.setAttribute('style', 'white-space: pre;');
msg2.setAttribute('style', 'white-space: pre;');

msg.textContent = `Start the game. Get 5 wins to win!`;

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
});

reloadButton.addEventListener('click', () => {
    window.location.reload(false);
})