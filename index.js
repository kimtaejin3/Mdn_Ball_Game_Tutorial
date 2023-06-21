const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const ballRadius = 11;
let x = canvas.width / 2;
let y = canvas.height;

function circle() {
  ctx.fillStyle = "royalblue";
  ctx.arc(
    canvas.width / 2,
    canvas.height - ballRadius,
    ballRadius,
    0,
    Math.PI * 2
  );
  ctx.fill();
}

function animate() {
  ctx.fillStyle = "#dce0e3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  circle();
  requestAnimationFrame(animate);
}

animate();
