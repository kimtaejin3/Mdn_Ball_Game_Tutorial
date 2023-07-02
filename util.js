function checkCorner(ball) {
  if (ball.x - ball.ballRadius < 0 || ball.x + ball.ballRadius > canvas.width) {
    ball.dx *= -1;
  }
  if (ball.y - ball.ballRadius < 0) {
    ball.dy *= -1;
  }
}

function checkPaddle(ball) {
  if (
    ball.y + ball.ballRadius > canvas.height - paddleHeight &&
    ball.x > paddleX &&
    ball.x < paddleX + paddleWidth
  ) {
    if (ball.dy < 0) return;
    ball.dy *= -1;
  }
}

function checkBrick(ball) {
  let f = false;
  for (let i = 0; i < BrickRow; i++) {
    for (let j = 0; j < BrickCol; j++) {
      let brick = Bricks[i][j];

      if (brick.hit) continue;

      if (
        ball.y - ball.ballRadius < brick.y + BrickHeight &&
        ball.y + ball.ballRadius > brick.y &&
        ball.x + ball.ballRadius > brick.x &&
        ball.x - ball.ballRadius < brick.x + BrickWidth
      ) {
        brick.hit = true;

        for (let i = 0; i < 15; i++) {
          brickParticles.push(
            new BrickParticle({
              position: {
                x: Math.floor(Math.random() * BrickWidth + brick.x) + 15,
                y: Math.floor(Math.random() * BrickHeight + brick.y) + 15,
              },
              velocity: {
                x: (Math.random() - 0.5) * 2,
                y: 1,
              },
              radius: Math.random() * 3,
              color: "royalblue",
            })
          );
        }

        ball.dy = -ball.dy;

        if (
          (ball.x < brick.x && ball.dx > 0) ||
          (ball.x > brick.x + BrickWidth && ball.dx < 0)
        ) {
          if (f) {
            continue;
          }
          ball.dx = -ball.dx;
          // 이 경우 y의 방향이 바뀌면 안됨
          ball.dy = -ball.dy;
          f = true;
        }
      }

      Bricks[i][j] = brick;
    }
  }
}

function isGameOver(ball) {
  if (ball.y + ball.ballRadius > canvas.height) {
    ball.dx = 0;
    ball.dy = 0;
    document.querySelector("#gameover").style.display = "initial";
  }
}
