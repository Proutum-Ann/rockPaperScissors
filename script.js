const userName = prompt("Hello! Have we met before? What's your name?")
document.getElementById('greet').innerHTML = `<p>Hi ${userName}! I won't be going easy on you!</p>`

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

let computerChoice = getComputerChoice();
let userChoice = document.getElementById('userPlay').value

const determineWinner = (userChoice, computerChoice) => {
  console.log(userChoice, computerChoice);

  if (userChoice === computerChoice) {
    return console.log("It's a tie!");
  } else {
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return console.log("You lost!");
      } else {
        return console.log("You won!");
      }
    }
    else if (userChoice === "paper"){
      if (computerChoice === "scissors"){
        return console.log("You lost!")
      } else {
        return console.log("You won!")
      }
    }
    else if (userChoice === "scissors"){
      if (computerChoice === "rock"){
        return console.log("You lost!")
      } else {
        return console.log("You won!")
      }
    } else if (userChoice === "bomb"){
      return console.log("You won!")
    } else {
      return console.log("Sorry, there was an issue in processing the results.")
    }
  }
}

let userChoiceImg = ''

if (userChoice === 'rock') {
  userChoiceImg = '<img src="imgs/rock.png" class="playimage">';
} else if (userChoice === 'paper') {
  userChoiceImg = '<img src="imgs/paper.webp" class="playimage">';
} else if (userChoice === 'scissors') {
  userChoiceImg = '<img src="imgs/scissors.webp" class="playimage">';
} else if (userChoice === 'bomb') {
  userChoiceImg = '<img src="imgs/boom.png" class="playimage">';
}

document.getElementById('userPlay').innerHTML = userChoiceImg

function computerWon(){

}

const playGame = (userChoice) =>{
  computerChoice = getComputerChoice();
  console.log(userChoice)
  console.log(computerChoice)
  determineWinner(userChoice, computerChoice);
}
