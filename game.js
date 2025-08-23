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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

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
                console.log('You won the round!');
                humanScore++;
            };
        };
    };
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    };
    if (humanScore > computerScore){
        console.log('You Win!')
    }
    else {
        console.log('Computer Wins!')
    };
};

playGame()