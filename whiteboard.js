const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

var clearCanvas = document.getElementById("clearCanvas");
var saveCanvas = document.getElementById("saveCanvas");

// ERASER

var eraser = document.getElementById("eraser");
eraser.addEventListener("click", erase);

function erase() {
  ctx.strokeStyle = "black";
  ctx.lineWidth = "10";
}

// COLORS

var redColor = document.getElementById("red");
redColor.addEventListener("click", redPen);

var blueColor = document.getElementById("blue");
blueColor.addEventListener("click", bluePen);

var whiteColor = document.getElementById("white");
whiteColor.addEventListener("click", whitePen);

var yellowColor = document.getElementById("yellow");
yellowColor.addEventListener("click", yellowPen);

var greenColor = document.getElementById("green");
greenColor.addEventListener("click", greenPen);

function redPen() {
  ctx.strokeStyle = "red";
}

function whitePen() {
  ctx.strokeStyle = "white";
}

function bluePen() {
  ctx.strokeStyle = "blue";
}

function yellowPen() {
  ctx.strokeStyle = "yellow";
}

function greenPen() {
  ctx.strokeStyle = "green";
}

//Pencil Widths

var twoPxWidth = document.getElementById("xs");
twoPxWidth.addEventListener("click", xsWidth);

function xsWidth() {
  ctx.lineWidth = "2";
}

var fivePxWidth = document.getElementById("small");
fivePxWidth.addEventListener("click", smallWidth);

function smallWidth() {
  ctx.lineWidth = "5";
}

var tenPxWidth = document.getElementById("medium");
tenPxWidth.addEventListener("click", mediumWidth);

function mediumWidth() {
  ctx.lineWidth = "10";
}

var onefivePxWidth = document.getElementById("large");
onefivePxWidth.addEventListener("click", largeWidth);

function largeWidth() {
  ctx.lineWidth = "15";
}

var twozeroPxWidth = document.getElementById("xl");
twozeroPxWidth.addEventListener("click", xlWidth);

function xlWidth() {
  ctx.lineWidth = "20";
}

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let painting = false;

function startPosition(e) {
  painting = true;
  draw(e);
}

function finishedPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  ctx.lineCap = "round";

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

// Event Listeners

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);

clearCanvas.addEventListener("click", eraseCanvas, false);
saveCanvas.addEventListener("click", saveImage);

function eraseCanvas() {
  const canvas = document.querySelector("#myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImage() {
  const canvas = document.querySelector("#myCanvas");
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
  } else {
    const ctx = canvas.getContext("2d");
    const dataURI = canvas.toDataURL("image/jpeg");
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpeg", 1);

    a.download = "canvas-image.jpg";
    a.style.backgroundColor = "black";
    document.body.appendChild(a).style.background = "lightblue repeat-x center";
    a.click();
  }
}
