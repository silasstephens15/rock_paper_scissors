function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let random = Math.random() * 2;
  random = Math.round(random);
  return choices[random];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const results = document.querySelector("#results");
  const runningScore = document.querySelector("#running-score");

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) =>
    button.addEventListener("click", function () {
      playRound(button.id, getComputerChoice());
    })
  );

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        results.textContent = "Tie!";
      }
      if (computerChoice === "paper") {
        results.textContent = "Computer won the round!";
        computerScore++;
      }
      if (computerChoice === "scissors") {
        results.textContent = "You won the round";
        humanScore++;
      }
    }
    if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        results.textContent = "Tie!";
      }
      if (computerChoice === "scissors") {
        results.textContent = "Computer won the round!";
        computerScore++;
      }
      if (computerChoice === "rock") {
        results.textContent = "You won the round";
        humanScore++;
      }
    }
    if (humanChoice === "scissors") {
      if (computerChoice === "scissors") {
        results.textContent = "Tie!";
      }
      if (computerChoice === "rock") {
        results.textContent = "Computer won the round!";
        computerScore++;
      }
      if (computerChoice === "paper") {
        results.textContent = "You won the round";
        humanScore++;
      }
    }
    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
        runningScore.textContent = "You win!";
      } else if (humanScore < computerScore) {
        runningScore.textContent = "Computer Wins!";
      } else {
        runningScore.textContent = "It is a Tie!";
      }
      humanScore = 0;
      computerScore = 0;
    } else {
      runningScore.textContent = `Computer: ${computerScore}\nPlayer: ${humanScore}`;
    }
  }
}

playGame();
