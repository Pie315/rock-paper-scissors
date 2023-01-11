console.log("Code working as intended!");


// Returns either rock paper or scissors 
function getComputerChoice() { 
    OneToThree = Math.floor(Math.random() * 3);    
    if (OneToThree == 0) {
        return "rock";
    } else if (OneToThree == 1) {
        return "paper";
    } else if (OneToThree == 2) {
        return "scissors";
    } else {
        return "error in getCompChoice";
    }
}

// Returns lowercase version of user input
function getUserChoice(playChoice) {
    playChoice = playChoice.toLowerCase();
    return playChoice;
}

// returns "win", "loss", or "tie" from player perspective
function winner(player, computer) {
    if (player == "rock") {
        switch (computer) {
            case "rock": return "tie";
            case "paper": return "loss";
            case "scissors": return "win";
        }
    } else if (player == "paper") {
        switch (computer) {
            case "rock": return "win";
            case "paper": return "tie";
            case "scissors": return "loss";
        }
    } else if (player == "scissors") {
        switch (computer) {
            case "rock": return "loss";
            case "paper": return "win";
            case "scissors": return "tie";
        }
    } else {
        return "error in winner"
    }
}

// returns the outcome of a single game
function playRound(choice) {
    const computer = getComputerChoice();
    const user = getUserChoice(choice);
    let result = winner(user, computer);
    return [computer, user, result];
    //console.log("The computer picked "+computer+" and you picked "+user+" resulting in: "+result);
}

let wins = 0;
let losses = 0;
let ties = 0;

function onButtonClick(e) {
    e.target.style.background = 'blue';
}

function onMouseUp(e) {
    e.target.style.background = '#2DC7FF';
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('mousedown', (e) => {onButtonClick(e);})
    button.addEventListener('mouseup', (e) => {onMouseUp(e);})
});




/*
function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        let result = playRound();
        console.log("The computer picked "+result[0]+" and you picked "+result[1]+" resulting in: "+result[2]);

        switch (result[2]) {
            case "win": wins++;
            case "loss": losses++;
            case "tie": ties++;
        }
    }
    console.log("You had "+wins+" wins, "+losses+" losses, and "+ties+" ties.")
}
*/