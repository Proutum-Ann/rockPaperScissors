userName = prompt("Hello! I don't seem to know you, do you mind telling me your name?")

greetingText = ` <p>Hi there ${userName}, please get ready to have a rock, paper, scissors match! I won't be taking it easy on you!</p> `

document.getElementById('greet').innerHTML = greetingText

let userChoice = document.getElementById('usersPick')

document.getElementById('userPlay').innerHTML = console.log(userChoice)