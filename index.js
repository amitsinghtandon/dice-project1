let randomNumber1 = Math.floor(Math.random()*6+1);

let randomImage = "./images/dice"+ randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);

let randomNumber2 = Math.floor(Math.random()*6+1);
let randomImage2 = "./images/dice"+ randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2);

if (randomNumber1>randomNumber2) {
   document.querySelector("h2").innerHTML = " 🍧 Player 1 Wins"
} 
else if (randomNumber2>randomNumber1) {
   document.querySelector("h2").innerHTML = "Player 2 Wins 🍧"
}
else {
    document.querySelector("h2").innerHTML = " Draw"
}
