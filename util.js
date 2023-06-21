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
    if (dy < 0) return;
    dy *= -1;
  }
}

function checkBrick() {
  let f = false;
  for (let i = 0; i < BrickRow; i++) {
    for (let j = 0; j < BrickCol; j++) {
      let brick = Bricks[i][j];

      if (brick.hit) continue;

      if (
        y - ballRadius < brick.y + BrickHeight &&
        y + ballRadius > brick.y &&
        x + ballRadius > brick.x &&
        x - ballRadius < brick.x + BrickWidth
      ) {
        brick.hit = true;
        dy = -dy;

        if ((x < brick.x && dx > 0) || (x > brick.x + BrickWidth && dx < 0)) {
          if (f) {
            continue;
          }
          dx = -dx;
          // 이 경우 y의 방향이 바뀌면 안됨
          dy = -dy;
          f = true;
        }
      }

      Bricks[i][j] = brick;
    }
  }
}
