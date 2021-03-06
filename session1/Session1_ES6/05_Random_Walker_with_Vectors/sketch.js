let w;

function setup() {

  createCanvas(600, 600);
  w = new Walker();
}

function draw() {

  background(51);
  w.update();
  w.show();
}

class Walker {

  constructor() {
    this.pos = createVector(width / 2, height / 2);
  }

  update() {
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.pos.add(this.velocity);
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 24, 24);
  }
}

/*
# Nature_of_Code_p5js

Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info

More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/

this.info
Vector Math
*/
