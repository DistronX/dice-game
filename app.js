var randInt1 = Math.floor(Math.random() * 6) + 1;
var randInt2 = Math.floor(Math.random() * 6) + 1;

var dice = document.querySelectorAll("img");

dice[0].setAttribute("src","images/dice" + randInt1 + ".png");
dice[1].setAttribute("src","images/dice" + randInt2 + ".png");

if (randInt1 > randInt2) {
    document.querySelector("h1").innerText = "Player 1 Wins"
} else if (randInt1 < randInt2) {
    document.querySelector("h1").innerText = "Player 2 Wins"
} else {
    document.querySelector("h1").innerText = "Draw"
}