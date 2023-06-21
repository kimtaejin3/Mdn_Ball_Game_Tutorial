const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const ballRadius = 11;
let ballSpeed = 4;
let x = canvas.width / 2;
let y = canvas.height - ballRadius;

let dx = ballSpeed;
let dy = ballSpeed;

function circle(x, y) {
  ctx.beginPath();
  ctx.fillStyle = "royalblue";
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function checkCorner() {
  if (x - ballRadius < 0 || x + ballRadius > canvas.width) {
    dx *= -1;
  }
  if (y - ballRadius < 0 || y + ballRadius > canvas.height) {
    dy *= -1;
  }
}

function animate() {
  ctx.fillStyle = "#dce0e3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  circle(x, y);
  checkCorner();

  x -= dx;
  y -= dy;
  requestAnimationFrame(animate);
}

animate();
