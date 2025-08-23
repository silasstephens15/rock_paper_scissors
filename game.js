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