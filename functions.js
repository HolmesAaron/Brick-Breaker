function gameStart() {
  reset();
}

function gamePlay() {
  paddleHandler();
  brickCollide();
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
    paddleX -= 4;
  }
  if (moveRight) {
    paddleX += 4;
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

function brickCollide() {
  if (
    (ballX + ballRad > brick1X) &
    (ballX - ballRad < brick1X + brick1Width) &
    (ballY + ballRad > brick1Y) &
    (ballY - ballRad < brick1Y + brick1Height)
  ) {
    brick1X = Math.round(Math.random() * 700);
    ballYS = -ballYS;
    scoreUpdate();
  }

  if (
    (ballX + ballRad > brick2X) &
    (ballX - ballRad < brick2X + brick2Width) &
    (ballY + ballRad > brick2Y) &
    (ballY - ballRad < brick2Y + brick2Height)
  ) {
    brick2X = Math.round(Math.random() * 700);
    ballYS = -ballYS;
    scoreUpdate();
  }

  if (
    (ballX + ballRad > brick3X) &
    (ballX - ballRad < brick3X + brick3Width) &
    (ballY + ballRad > brick3Y) &
    (ballY - ballRad < brick3Y + brick3Height)
  ) {
    brick3X = Math.round(Math.random() * 700);
    ballYS = -ballYS;
    scoreUpdate();
  }
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
  paddleMid = paddleX + paddleWidth / 2;
  ballAngle = paddleMid - ballX;
  console.log(ballAngle);
  if (
    (ballX + ballRad > paddleX) &
    (ballX - ballRad < paddleX + paddleWidth) &
    (ballY + ballRad < cnv.height - 130) &
    (ballY + ballRad > cnv.height - 150)
  ) {
    if ((ballAngle < 15) & (ballAngle > -15)) {
      ballXS = 0;
      ballYS = 8;
    } //else if (ballAngle > 15 & ballAngle < 30)
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
  ballXS = 1;
  ballYS = 8;
  score = 0;
  brick1X = 125;
  brick1Y = 100;
  brick1Height = 15;
  brick1Width = 50;
  brick2X = 625;
  brick2Y = 225;
  brick2Height = 15;
  brick2Width = 50;
  brick3X = 375;
  brick3Y = 350;
  brick3Height = 15;
  brick3Width = 50;
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

  // Draw bricks
  ctx.fillStyle = "white";
  ctx.fillRect(brick1X, brick1Y, brick1Width, brick1Height);
  ctx.fillRect(brick2X, brick2Y, brick2Width, brick2Height);
  ctx.fillRect(brick3X, brick3Y, brick3Width, brick3Height);
}

function scoreUpdate() {
  score++;
  if (score > highScore) {
    highScore = score;
  }
  console.log(score, highScore);
}
