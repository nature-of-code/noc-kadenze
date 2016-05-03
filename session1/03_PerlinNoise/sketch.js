// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Perlin noise

// "x-offset" in Perlin noise space
var xoff = 0;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  // "regular" randomness
  // var x = random(0, width);

  // Perlin noise value
  var x = noise(xoff) * width;

  // Move through perlin noise space
  xoff += 0.05;

  fill(255);
  ellipse(x, 180, 48, 48);
}
