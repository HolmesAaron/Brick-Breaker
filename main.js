// Brick Breaker

// Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 1000;

// Variables
let paddleX = 400;
let ADown = false;
let DDown = false;
let ArrowL = false;
let ArrowR = false;
let moveRight = false;
let moveLeft = false;
let state = "gamePlay";

// Draw loop
window.addEventListener("load", draw);
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "white";
  ctx.fillRect(paddleX, 850, 150, 35);

  if (state === "gameStart") {
    gameStart();
  }
  if (state === "gamePlay") {
    gamePlay();
  }
  if (state === "gameOver") {
    gameOver();
  }
  // console.log(paddleX);
  requestAnimationFrame(draw);
}
