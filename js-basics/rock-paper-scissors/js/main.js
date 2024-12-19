const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const comp = document.getElementById("comp");
const resultD = document.getElementById("result");
const playerScore =document.getElementById("playerScore");
const compScore =document.getElementById("compScore");

let pS=0;
let cS=0;
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result = "";
  if (computerChoice === playerChoice) {
    result = "IT'S A TIE";
    console.log(result);
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
        console.log(result);
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE";
        console.log(result);
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN" : "YOU LOSE";
        console.log(result);
        break;
    }
  }
  player.textContent = `PLAYER:${playerChoice}`;
  comp.textContent = `COMPUTER: ${computerChoice}`;
  resultD.textContent = result;
  
  resultD.classList.remove("greenText" , "redText");

  switch (result) {
    case "YOU WIN":
      resultD.classList.add("greenText");
      pS++; 
      playerScore.textContent = pS;
      break;

    case "YOU LOSE":
      resultD.classList.add("redText");
      cS++;
      compScore.textContent =cS;
      break;
  }
}
