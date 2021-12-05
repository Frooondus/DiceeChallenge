//Player 1
const firstRandom = Math.floor(Math.random() * 6) + 1

const firstDiceImg = 'images/dice' + firstRandom + '.png'

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImg)

//Player 2
const secondRandom = Math.floor(Math.random() * 6) + 1

const secondDiceImg = 'images/dice' + secondRandom + '.png'

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImg)

//Winner
if (firstRandom > secondRandom){
  document.querySelector('h1').innerHTML = ' 🐱‍👤 The winner is Player 1  🐱‍👤 ';
}
else if (firstRandom < secondRandom){
  document.querySelector('h1').innerHTML = ' 🐱‍💻 The winner is Player 2  🐱‍💻 ';
}
else{
  document.querySelector('h1').innerHTML = ' 🤜 It is a draw 🤛 ';
}
