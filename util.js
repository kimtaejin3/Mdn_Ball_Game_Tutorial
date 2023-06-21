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
    y + ballRadius > canvas.height &&
    x > paddleX &&
    x < paddleX + paddleWidth
  ) {
    dy *= -1;
  }
}
