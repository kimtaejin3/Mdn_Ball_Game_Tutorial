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

class BrickParticle {
  constructor({ position, velocity, radius, color }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
    this.opacity = 1;
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, 5, 5);
    ctx.closePath();
    ctx.restore();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.opacity -= 0.01;
  }
}
