function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.random() * 2;
    random = Math.round(random);
    return choices[random]
};