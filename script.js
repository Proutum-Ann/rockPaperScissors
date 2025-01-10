userName = prompt("Hello! I don't seem to know you, do you mind telling me your name?")

greetingText = ` <p>Hi there ${userName}, please get ready to have a rock, paper, scissors match! I won't be taking it easy on you!</p> `

document.getElementById('greet').innerHTML = greetingText

let userChoice = document.getElementById('usersPick')

document.getElementById('userPlay').innerHTML = console.log(userChoice)

let userScore = 0
let compScore = 0

let userPlay = `<img src="imgs/${valChoice}.png"><br><p>You played ${userChoice}!</p>`
let compPlay = `<img src="imgs/${valChoice}.png"><br><p>You played ${compChoice}!</p>`

document.getElementById('userScore').innerHTML = console.log(userScore)
document.getElementById('compScore').innerHTML = console.log(compScore)