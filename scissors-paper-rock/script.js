const getComputerChoice = function () {
  const choices = ["Scissors", "Paper", "Rock"];
  let computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
};

function playRound(playerInput, computerInput) {
  playerChoice = playerInput.toLowerCase();
  computerChoice = computerInput.toLowerCase();

  if (playerChoice === "paper" && computerChoice === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else {
    return "Its a Tie! Try again";
  }
}

function Game() {
  let playerScore = 0;
  let computerScore = 0;
  let resultString;
  while (!(playerScore >= 5 || computerScore >= 5)) {
    let playerInput = prompt("Scissors, Paper or Rock, what is your choice?");
    let computerInput = getComputerChoice();
    resultString = playRound(playerInput, computerInput);

    if (resultString.includes("Win")) {
      playerScore++;
    } else if (resultString.includes("Lose")) {
      computerScore++;
    }

    console.log(resultString);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  console.log(
    playerScore == 5 ? "You won the Game!!!" : "You lose the Game!!!"
  );
}

Game();
/*

paper paper
paper rock
rock scissors
scissors rock

*/
