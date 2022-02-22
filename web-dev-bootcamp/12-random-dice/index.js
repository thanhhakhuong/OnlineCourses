// generate random numbeer
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// image for corresponding number
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

// change the (first) html element with .img1
// set src attribute's value to new random number's image
document.querySelector(".img1").setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage);

// if else conditions for winner case
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
