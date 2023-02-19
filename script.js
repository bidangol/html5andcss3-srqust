console.log('hello!')
var x = 10;
var y = 20;
var z = x + y;

console.log("The value of z is ", z);

var player1 = new Object();
player1.name = "Stoick the Vast";
player1.age = 50;
player1.maxScore = 1000;

var player2 = {name: "Hiccup Horrendous Haddock III", age: 15, maxScore: 1000};

var currentGamesScores = {};

var highestEverScore = player1.maxScore;

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less"; 
    moreText.style.display = "inline";
  }
}
