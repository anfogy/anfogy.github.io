var version = 1;

var points = 0;
var orSpeed = 0.3

var canvas = document.getElementById("ballCanv");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = random(canvas.width - ballRadius, ballRadius);
var y = random(canvas.height - ballRadius, ballRadius);

var dx = orSpeed;
var dy = -dx;
var speed = dx;

var lastCalcTime = 0;

load();

function setSpeed(sp) {
  if (Math.sign(dx) == -1) {
    dx = -sp;
  } else {
    dx = sp;
  }
  if (Math.sign(dy) == -1) {
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

function ballTrack() {
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    edgeHitEvent();
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy
    edgeHitEvent();
  }
  
  x += dx;
  y += dy;
}

function edgeHitEvent() {
  points++;
  setSpeed(orSpeed + (Math.log(points)**1.3));
  updatePoints();
}

function updatePoints() {
  document.getElementById("points").innerText = points;
}

function tickUpdate() {
  ballTrack();
}

function refreshUpdate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
}

var tickInterval = setInterval(tickUpdate);
var refreshInterval = setInterval(refreshUpdate);
var saveInterval = setInterval(function(){
  save();
}, 5000)

function save() {
  document.cookie = "save=" + points+"; SameSite=Lax; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

window.onbeforeunload = save();

function load() {
  points = getCookie("save");
  setSpeed(orSpeed + (Math.log(points)**1.3));
  updatePoints();
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//-------forget the balls, get into some news bar now-------//

/* var news = document.getElementById('news');
var guh = document.getElementById('guh');

var w = 400;
guh.style.width = w + 'px';
var s = 420;

function moveNews() {
  news.style.left = s +'px';
  if (s <= 0 - w + 1) {
    s = w - 1;
  }else {
    s = s - 1;
  }
}

function changeNews() {
  const news = ["This is a very important news!", ":blob:", "Guh?"]
}

var newsTextInterval = setInterval(moveNews, 70);
*/
