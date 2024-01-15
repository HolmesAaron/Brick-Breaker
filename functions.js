function gameStart() {
  reset();
}

function gamePlay() {
  paddleHandler();
  brickHandler();
  ballHandler();
}

function paddleHandler() {
  paddleMove();
  paddleBoundries();
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
function paddleBoundries() {
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

function ballHandler() {
  moveBall();
  ballBounce();
}
function moveBall() {
  ballX -= ballXS;
  ballY -= ballYS;
}
function ballBounce() {
  wallBounce();
  paddleBounce();
}
function wallBounce() {
  if (ballX <= ballRad) {
    ballX = ballRad + 1;
    ballXS = -ballXS;
  }
  if (ballX >= cnv.width - ballRad - 1) {
    ballX = cnv.width - ballRad;
    ballXS = -ballXS;
  }
  if (ballY - ballRad <= 0) {
    ballY = ballRad;
    ballYS = -ballYS;
  }
  if (ballY + ballRad >= cnv.height) {
    state = "gameOver";
  }
}
function paddleBounce() {
  if (
    (ballX + ballRad > paddleX) &
    (ballX - ballRad < paddleX + paddleWidth) &
    (ballY + ballRad < cnv.height - 130) &
    (ballY + ballRad > cnv.height - 150)
  ) {
    ballYS = -ballYS;
  }
}

function gameOver() {
  state = "gameStart";
}

// Helpers
function reset() {
  paddleX = cnv.width / 2 - paddleWidth / 2;
  ballX = cnv.width / 2;
  ballY = cnv.height - 200;
  ballXS = 10;
  ballYS = 10;
}

function drawGeneral() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "white";
  ctx.fillRect(paddleX, cnv.height - 150, paddleWidth, 20);

  ctx.fillstyle = "white";
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRad, 0, Math.PI * 2);
  ctx.fill();
}
