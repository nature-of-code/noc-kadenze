// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var angle;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  angle = map(mouseX, 0, width, 0, PI / 2);

  // Start the tree from the bottom of the screen
  translate(width / 2, height);
  stroke(255);
  branch(120, 1);
}

function branch(len, generation) {
  // Draw the branch
  strokeWeight(map(generation, 1, 10, 4, 1));
  line(0, 0, 0, -len);

  // Move to the end and shrink.
  translate(0, -len);
  len *= 0.66;
  
  generation++;
  
  if (len > 2) {
    push();
    rotate(angle);
    branch(len, generation);
    pop();

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-angle);
    branch(len, generation);
    pop();
  }
}