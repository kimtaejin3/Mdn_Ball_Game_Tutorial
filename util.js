function checkCorner(x, y, ballRadius) {
  if (x - ballRadius < 0 || x + ballRadius > canvas.width) {
    dx *= -1;
  }
  if (y - ballRadius < 0) {
    dy *= -1;
  }
}

function checkPaddle() {
  if (
    y + ballRadius > canvas.height - paddleHeight &&
    x > paddleX &&
    x < paddleX + paddleWidth
  ) {
    dy *= -1;
  }
}

function checkBrick() {
  for (let i = 0; i < BrickRow; i++) {
    for (let j = 0; j < BrickCol; j++) {
      let brick = Bricks[i][j];

      if (brick.hit) continue;

      if (
        y - ballRadius < brick.y + BrickHeight &&
        y + ballRadius > brick.y &&
        x > brick.x &&
        x < brick.x + BrickWidth
      ) {
        brick.hit = true;
        dy = dy * -1;
      }

      Bricks[i][j] = brick;
    }
  }
}
