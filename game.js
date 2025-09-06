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
        console.log("You won the round!");
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
        console.log("You won the round!");
        humanScore++;
      }
    }
  }
  if (humanScore > computerScore) {
    results.textContent = "You win!";
  } else if (humanScore < computerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("It is a Tie!");
  }
}

playGame();
