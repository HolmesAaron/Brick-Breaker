// Brick Breaker

// Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 1000;

// Variables
let paddleWidth = 150;
let paddleX = cnv.width / 2 - paddleWidth / 2;
let ADown, DDown, WDown;
let ArrowL, ArrowR, ArrowU;
let moveRight = false;
let moveLeft = false;
let ballX, ballY;
let ballXS, ballYS;
let ballRad = 15;
let state = "gameStart";

reset();

// Draw loop
window.addEventListener("load", draw);
function draw() {
  drawGeneral();

  if (state === "gameStart") {
    gameStart();
  } else if (state === "gamePlay") {
    gamePlay();
  } else if (state === "gameOver") {
    gameOver();
  }

  if (
    (state === "gameStart") & ArrowU & (ballY == cnv.height - 200) ||
    (state === "gameStart") & WDown & (ballY == cnv.height - 200)
  ) {
    state = "gamePlay";
  }

  requestAnimationFrame(draw);
}

// Event listeners and handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
// Event handlers

// Key Downs
function keydownHandler(event) {
  if (event.code == "KeyA") {
    ADown = true;
  }
  if (event.code == "KeyD") {
    DDown = true;
  }
  if (event.code == "KeyW") {
    WDown = true;
  }
  if (event.code == "ArrowLeft") {
    ArrowL = true;
  }
  if (event.code == "ArrowRight") {
    ArrowR = true;
  }
  if (event.code == "ArrowUp") {
    ArrowU = true;
  }
}

// Key Ups
function keyupHandler(event) {
  if (event.code == "KeyA") {
    ADown = false;
  }
  if (event.code == "KeyD") {
    DDown = false;
  }
  if (event.code == "KeyW") {
    WDown = false;
  }
  if (event.code == "ArrowLeft") {
    ArrowL = false;
  }
  if (event.code == "ArrowRight") {
    ArrowR = false;
  }
  if (event.code == "ArrowUp") {
    ArrowU = false;
  }
}
