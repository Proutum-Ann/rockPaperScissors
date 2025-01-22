const userName = prompt("Hello! Have we met before? What's your name?")
document.getElementById('greet').innerHTML = `<p>Hi ${userName}! I won't be going easy on you!</p>`

// Computer's choice
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
const userChoice = document.getElementById('usersPick').value

//images
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

//scoring
let pointResults = ''

const determineWinner = (userChoice, computerChoice) => {
  console.log(userChoice, computerChoice);

  if (userChoice === computerChoice) {
    pointResults = "tie"
    return console.log("It's a tie!");
  } else {
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        pointResults = "loss"
        return console.log("You lost!");
      } else {
        pointResults = "win"
        return console.log("You won!");
      }
    }
    else if (userChoice === "paper"){
      if (computerChoice === "scissors"){
        pointResults = "loss"
        return console.log("You lost!")
      } else {
        pointResults = "win"
        return console.log("You won!")
      }
    }
    else if (userChoice === "scissors"){
      if (computerChoice === "rock"){
        pointResults = "loss"
        return console.log("You lost!")
      } else {
        pointResults = "win"
        return console.log("You won!")
      }
    } else if (userChoice === "bomb"){
      pointResults = "win"
      return console.log("You won!")
    } else {
      return console.log("Sorry, there was an issue in processing the results.")
    }
  }
}

let compPoints = 0
let userPoints = 0

function points(pointResults) {
  if (pointResults === "win") {
    userPoints++
    return userPoints
  } else if (pointResults === "loss") {
    compPoints++
    return compPoints
  }
}

document.getElementById('userScore').innerHTML = `${userPoints}`
document.getElementById('compScore').innerHTML = `${compPoints}`

document.getElementById('userPlay').innerHTML = `${userChoiceImg}`

document.getElementById('results').innerHTML = determineWinner(userChoice, computerChoice)

const playGame = (userChoice) =>{
  computerChoice = getComputerChoice();
  console.log(userChoice)
  console.log(computerChoice)
  determineWinner(userChoice, computerChoice);
}

const bestOfThree = (userPoints, compPoints) => {
  if (userPoints === 3) {
    alert(`Good game, ${userName}!`)
  } else if (compPoints === 3) {
    alert('Everyone loses every once in a while!')
  }
}