var points = 1;

var canvas = document.getElementById("ballCanv");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = canvas.width/2;
var y = canvas.height-30;

var dx = 0.1;
var dy = -dx;

function setSpeed(speed) {
   dx = speed;
   dy = -speed;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        edgeHitEvent();
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        edgeHitEvent();
    }

    x += dx;
    y += dy;
}

function edgeHitEvent() {
  points++;
  setSpeed((points^2/10));
}

function updatePoints() {
   document.getElementById("points").innerText = points;
}

function tickUpdate() {
   draw();
   updatePoints();
}
setInterval(tickUpdate);
