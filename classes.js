class Ball {
  constructor({ x, y, ballSpeed, ballRadius }) {
    this.x = x;
    this.y = y;
    this.dx = ballSpeed;
    this.dy = ballSpeed;
    this.ballSpeed = ballSpeed;
    this.ballRadius = ballRadius;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "royalblue";
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.draw();

    this.x += this.dx;
    this.y += this.dy;
  }
}
