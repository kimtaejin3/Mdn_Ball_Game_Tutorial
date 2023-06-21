function checkCorner(x, y, ballRadius) {
  if (x - ballRadius < 0 || x + ballRadius > canvas.width) {
    dx *= -1;
  }
  if (y - ballRadius < 0 || y + ballRadius > canvas.height) {
    dy *= -1;
  }
}
