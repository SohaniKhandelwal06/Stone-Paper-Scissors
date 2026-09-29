let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {


const choices = ["stone", "paper", "scissors"];

// Computer randomly chooses
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Display choices
document.getElementById("player-choice").textContent =
    "You chose: " + playerChoice;

document.getElementById("computer-choice").textContent =
    "Computer chose: " + computerChoice;

let result = "";

// Check winner
if (playerChoice === computerChoice) {
    result = "It's a Draw! 🤝";
}
else if (
    (playerChoice === "stone" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "stone") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    result = "You Win! 🎉";
    playerScore++;
}
else {
    result = "Computer Wins! 🤖";
    computerScore++;
}

// Display result
document.getElementById("result").textContent = result;

// Update score
document.getElementById("player-score").textContent = playerScore;
document.getElementById("computer-score").textContent = computerScore;


}

function resetGame() {
playerScore = 0;
computerScore = 0;

```
document.getElementById("player-choice").textContent = "You chose: -";
document.getElementById("computer-choice").textContent = "Computer chose: -";
document.getElementById("result").textContent = "Make your choice!";

document.getElementById("player-score").textContent = "0";
document.getElementById("computer-score").textContent = "0";
```

}
