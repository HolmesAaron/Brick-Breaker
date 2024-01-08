function gameStart() {}

function gamePlay() {
  paddleHandler();
  brickHandler();
}

function paddleHandler() {
  paddleMove();
  paddleBound();
}

function paddleMove() {
  if (ADown || ArrowL) {
    moveLeft = true;
  } else {
    moveLeft = false;
  }
  if (DDown || ArrowR) {
    moveRight = true;
  } else {
    moveRight = false;
  }

  if (moveLeft) {
    paddleX -= 5;
  }
  if (moveRight) {
    paddleX += 5;
  }
}

function paddleBound() {
  if (paddleX < 0) {
    paddleX = 0;
    moveLeft = false;
  }
  if (paddleX > 650) {
    paddleX = 650;
    moveRight = false;
  }
}

function brickHandler() {
  drawBricks();
}

function drawBricks() {
  ctx.fillstyle = "white";
}
function gameOver() {}

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
  if (event.code == "ArrowLeft") {
    ArrowL = true;
  }
  if (event.code == "ArrowRight") {
    ArrowR = true;
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
  if (event.code == "ArrowLeft") {
    ArrowL = false;
  }
  if (event.code == "ArrowRight") {
    ArrowR = false;
  }
}
