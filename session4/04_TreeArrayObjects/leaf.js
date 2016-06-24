// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 4: Tree array of objects

function Leaf(pos) {

  this.pos = pos.copy();
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0.1);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    noStroke();
    fill(50, 100);
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }
}
