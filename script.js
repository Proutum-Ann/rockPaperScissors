userName = prompt("Hello! I don't seem to know you, do you mind telling me your name?")

greetingText = ` <p>Hi there ${userName}, please get ready to have a rock, paper, scissors match! I won't be taking it easy on you!</p> `

document.getElementById('greet').innerHTML = greetingText

let userInput = document.getElementById('usersPick')

document.getElementById('userPlay').innerHTML = console.log(userChoice)

let userScore = 0
let compScore = 0

let userPlay = `<img src="imgs/${valChoice}.png"><br><p>You played ${userChoice}!</p>`
let compPlay = `<img src="imgs/${valChoice}.png"><br><p>You played ${compChoice}!</p>`

document.getElementById('userScore').innerHTML = console.log(userScore)
document.getElementById('compScore').innerHTML = console.log(compScore)

/* const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } 
  else {
    console.log("Error, this is not a playable move");
  }
};

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
let userChoice = getUserChoice('rock');

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

function playGame(userChoice, computerChoice){
  computerChoice = getComputerChoice();
  userChoice = getUserChoice('bomb');
  console.log(userChoice)
  console.log(computerChoice)
  determineWinner(userChoice, computerChoice);
}

playGame(userChoice, computerChoice) */