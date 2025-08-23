let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.random() * 2;
    random = Math.round(random);
    return choices[random]
};

function getHumanChoice(){
    const choice = prompt('Enter rock, paper, or scissors: ');
    return choice;
};

function playRound(humanChoice, computerChoice){
    if (humanChoice === 'rock'){
        if (computerChoice === 'rock'){
            console.log('Tie!')
        };
        if (computerChoice === 'paper'){
            console.log('Computer Wins!');
            computerScore++;
        };
        if (computerChoice === 'scissors'){
            console.log('Human Wins!');
            humanScore++;
        };
    };
    if (humanChoice === 'paper'){
        if (computerChoice === 'paper'){
            console.log('Tie!')
        };
        if (computerChoice === 'scissors'){
            console.log('Computer Wins!');
            computerScore++;
        };
        if (computerChoice === 'rock'){
            console.log('Human Wins!');
            humanScore++;
        };
    };
    if (humanChoice === 'scissors'){
        if (computerChoice === 'scissors'){
            console.log('Tie!')
        };
        if (computerChoice === 'rock'){
            console.log('Computer Wins!');
            computerScore++;
        };
        if (computerChoice === 'paper'){
            console.log('Human Wins!');
            humanScore++;
        };
    };
};