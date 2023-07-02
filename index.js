// canvas settings
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

// ball
const ball = new Ball({
  x: canvas.width / 2,
  y: canvas.height - 20,
  ballSpeed: -5,
  ballRadius: 12,
});

//paddle
const paddleWidth = 55;
const paddleHeight = 10;

let paddleX = canvas.width / 2 - paddleWidth;
let paddleY = canvas.height - paddleHeight;

const paddleSpeed = 8;

// brick particles
const brickParticles = [];

// keys
let lastKey;
const keys = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

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
  checkCorner(ball);
  checkPaddle(ball);
  checkBrick(ball);

  // draw
  drawPaddle();
  drawBrick();

  // drawCircle(x, y);
  ball.update();

  // brick Particles update
  brickParticles.forEach((particle, index) => {
    if (particle.opacity <= 0) {
      brickParticles.splice(index, 1);
    } else particle.update();
  });

  if (keys.ArrowLeft.pressed && lastKey === "ArrowLeft") {
    paddleX -= paddleSpeed;
  } else if (keys.ArrowRight.pressed && lastKey === "ArrowRight") {
    paddleX += paddleSpeed;
  }

  isGameOver(ball);

  requestAnimationFrame(animate);
}

animate();

/*
 brick 추가
 score 추가하기
 클래스로? -> 공을 추가한다면?  -> paddle을 추가한다면?
*/
