var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var image1 = "./images/dice" + randomNumber1 + ".png"
var image2 = "./images/dice" + randomNumber2 + ".png"

var msg1 = "Player 1 wins!"
var msg2 = "Player 2 wins!"
var msg3 = "It's a tie!"

function dice () {
  document.querySelector(".img1").src = image1
  document.querySelector(".img2").src = image2
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = msg1
  }else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = msg2
  } else {
    document.querySelector("h1").textContent = msg3
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var primeiroCarregamento = localStorage.getItem("firstLoad")
  if (primeiroCarregamento) {
    dice()
  } else {
    localStorage.setItem("firstLoad", "true")
  }
})
