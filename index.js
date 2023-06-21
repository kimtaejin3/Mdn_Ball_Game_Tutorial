// canvas settings
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const ballRadius = 12;
let ballSpeed = 4;
let x = canvas.width / 2;
let y = canvas.height - ballRadius;

let dx = ballSpeed;
let dy = ballSpeed;

let paddleX = 0;
let paddleY = canvas.height - 10;

let lastKey;
const paddleSpeed = 8;

//draw functions
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.fillStyle = "royalblue";
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.fillStyle = "royalblue";
  ctx.fillRect(paddleX, paddleY, 55, 10);
}

// keys
const keys = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

function animate() {
  ctx.fillStyle = "#dce0e3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawPaddle();
  drawCircle(x, y);
  checkCorner(x, y, ballRadius);

  if (keys.ArrowLeft.pressed && lastKey === "ArrowLeft") {
    paddleX -= paddleSpeed;
  } else if (keys.ArrowRight.pressed && lastKey === "ArrowRight") {
    paddleX += paddleSpeed;
  }

  x -= dx;
  y -= dy;
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      console.log("left");
      keys.ArrowLeft.pressed = true;
      lastKey = "ArrowLeft";
      break;
    case "ArrowRight":
      console.log("right");
      keys.ArrowRight.pressed = true;
      lastKey = "ArrowRight";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
  }
});
