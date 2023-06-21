// canvas settings
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const ballRadius = 12;
let ballSpeed = -5;
let x = canvas.width / 2;
let y = canvas.height - ballRadius;

let dx = ballSpeed;
let dy = ballSpeed;

const paddleWidth = 55;
const paddleHeight = 10;

let paddleX = 0;
let paddleY = canvas.height - paddleHeight;

let lastKey;
const paddleSpeed = 8;

// keys
const keys = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

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
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
}

// Bricks
makeBricks(BrickRow, BrickCol);

function drawBrick() {
  ctx.fillStyle = "royalblue";
  for (let i = 0; i < BrickRow; i++) {
    for (let j = 0; j < BrickCol; j++) {
      let brick = Bricks[i][j];
      if (brick.hit) continue;
      ctx.fillRect(brick.x, brick.y, BrickWidth, BrickHeight);
    }
  }
}

// game loop
function animate() {
  ctx.fillStyle = "#dce0e3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // check
  checkCorner(x, y, ballRadius);
  checkPaddle();
  checkBrick();

  // draw
  drawPaddle();
  drawCircle(x, y);
  drawBrick();

  if (keys.ArrowLeft.pressed && lastKey === "ArrowLeft") {
    paddleX -= paddleSpeed;
  } else if (keys.ArrowRight.pressed && lastKey === "ArrowRight") {
    paddleX += paddleSpeed;
  }
  x += dx;
  y += dy;

  if (y + ballRadius > canvas.height) {
    dx = 0;
    dy = 0;
    document.querySelector("#gameover").style.display = "initial";
  }

  console.log(dy);

  requestAnimationFrame(animate);
}

animate();

/*
 brick 추가
 score 추가하기
 클래스로? -> 공을 추가한다면?  -> paddle을 추가한다면?
*/
