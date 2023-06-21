const BrickWidth = 90;
const BrickHeight = 30;

const BrickRow = 3;
const BrickCol = 5;
let BrickOffsetH = 25;
let BrickOffsetV = 15;

let BrickCount = 6;

let Bricks;

function makeBricks(n, m) {
  Bricks = Array.from(Array(n), () => new Array(m));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let brick = {
        x: j * BrickWidth + BrickOffsetH * j + BrickOffsetH,
        y: i * BrickHeight + BrickOffsetV * i + BrickOffsetV + 30,
        hit: false,
      };
      Bricks[i][j] = brick;
    }
  }
  console.log(Bricks);
}
