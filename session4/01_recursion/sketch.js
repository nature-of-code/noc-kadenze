// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 4: Recursion

function setup() {
  createCanvas(640, 800);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  drawCircle(width / 2, 100, 300);
  noLoop();
}

function drawCircle(x, y, d) {
  ellipse(x, y, d, d);

  if (d > 10) {
    drawCircle(x + d / 2, y, d / 2);
    drawCircle(x - d / 2, y, d / 2);
  }
}
