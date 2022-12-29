var points = 1;
var orSpeed = 0.3

var canvas = document.getElementById("ballCanv");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = Math.random() * (canvas.width - 60) + 10;
var y = Math.random() * (canvas.height - 100);

var dx = orSpeed;
var dxd = 0;
var dy = -dx;
var dyd = 1;
var speed = dx;

function setSpeed(sp) {
  if (dxd % 2) {
    dx = -sp;
  } else {
    dx = sp;
  } if (dyd % 2) {
    dy = -sp;
  } else {
    dy = sp;
  }
  speed = sp;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dxd++;
    dx = -dx;
    edgeHitEvent();
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dyd++;
    dy = -dy;
    edgeHitEvent();
  }
  x += dx;
  y += dy;
}

function edgeHitEvent() {
  points++;
  setSpeed(orSpeed + Math.log(points));
}

function updatePoints() {
  document.getElementById("points").innerText = points;
}

function tickUpdate() {
  draw();
  updatePoints();
}
setInterval(tickUpdate);
