
function dieGame(){
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);
console.log(randomNumber2);



if (randomNumber1 === 1) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
    document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
}

if (randomNumber2 === 1) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
    document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").style.fontSize = "5rem"
    document.querySelector("h1").innerHTML = "<span>Draw!</span><br> Try Again";
} else if (randomNumber1 > randomNumber2)  {
    document.querySelector("h1").innerHTML = "<span>Player<br> 1</span> Wins!";
} else {
    document.querySelector("h1").innerHTML= "<span>Player<br> 2</span> Wins!";
}
}