var points = 1;

var canvas = document.getElementById("ballCanv");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 0.1;
var dy = -dx;

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
        points++;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        points++;
    }

    x += dx;
    y += dy;
}

function updatePoints() {
   document.getElementById("points").innerText = points;
}

function tickUpdate() {
   draw();
   updatePoints();
   dx = dx * points;
   dy = dy * points;
}
setInterval(tickUpdate);
