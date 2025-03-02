const userName = prompt("Hello! Have we met before? What's your name?")
document.getElementById('greet').innerHTML = `<p>Hi ${userName}! I won't be going easy on you!</p>`

let userChoice = document.getElementById('usersPick').value

//images

function getUserImages(userChoice) {
  if (userChoice === 'rock') {
    document.getElementById('userPlay').src = 'imgs/rock.png'
  } else if (userChoice === 'paper') {
    document.getElementById('userPlay').src = 'imgs/paper.png'
  } else if (userChoice === 'scissors') {
    document.getElementById('userPlay').src = 'imgs/scissors.png'
  }
}

// Computer's choice
function getComputerChoice() {
  document.getElementById('compPlay').src = ''

  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    document.getElementById('compPlay').src = 'imgs/rock.png'
    return "rock";
  } else if (randomNumber === 1) {
    document.getElementById('compPlay').src = 'imgs/paper.png'
    return "paper";
  } else if (randomNumber === 2) {
    document.getElementById('compPlay').src = 'imgs/scissors.png'
    return "scissors";
  }
}

let computerChoice = getComputerChoice();

//scoring
let pointResults = ''

function bestOfThree(userPoints, compPoints){

  if (userPoints === 3 && compPoints < 3) {
  document.getElementById('results').innerHTML = `<center>Congratulations, ${userName}, you won!<br><button onClick="window.location.reload();">Play Again!</button></center>`
  } else if (compPoints === 3 && userPoints < 3) {
  document.getElementById('results').innerHTML = `<center>How did you lose to a computer??????<br><button onClick="window.location.reload();">Try Again</button></center>`
  } else if (compPoints < 3 && userPoints < 3){
  document.getElementById('results').innerHTML = `<center>Play and determine the winner!</center>`
  }
}

let compPoints = 0
let userPoints = 0

const determineWinner = (userChoice, computerChoice) => {
  
  document.getElementById('userScore').innerHTML = `<p>${userPoints}</p>`
  document.getElementById('compScore').innerHTML = `<p>${compPoints}</p>`

  if (userChoice === computerChoice) {
    pointResults = "tie"

    return console.log("It's a tie!");
  } else {
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        pointResults = "loss"
        compPoints++
        return console.log("You lost!");
      } else {
        pointResults = "win"
        userPoints++
        return console.log("You won!");
      }
    }
    else if (userChoice === "paper"){
      if (computerChoice === "scissors"){
        pointResults = "loss"
        compPoints++
        return console.log("You lost!")
      } else {
        pointResults = "win"
        userPoints++
        return console.log("You won!")
      }
    }
    else if (userChoice === "scissors"){
      if (computerChoice === "rock"){
        pointResults = "loss"
        compPoints++
        return console.log("You lost!")
      } else {
        pointResults = "win"
        return console.log("You won!")
      }
    } else if (userChoice === "bomb"){
      pointResults = "win"
      userPoints++
      return console.log("You won!")
    } else {
      return console.log("Sorry, there was an issue in processing the results.")
    }
  }
}

const playGame = (userChoice) =>{
  console.log(userChoice)
  getUserImages(userChoice)
  computerChoice = getComputerChoice();
  console.log(computerChoice)
  determineWinner(userChoice, computerChoice);
  console.log(userPoints)
  console.log(compPoints)
  bestOfThree(userPoints, compPoints)
}
