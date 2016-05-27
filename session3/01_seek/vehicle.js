// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Seek Steering Behavior

function Vehicle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 5;
  this.maxforce = 0.2;

  this.r = 6;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.seek = function(target) {
    var desired = p5.Vector.sub(target, this.pos);

    // The seek behavior!
    desired.setMag(this.maxspeed);

    // Steering formula
    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);
    this.applyForce(steering);

  }

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    // Draw a triangle rotated in the direction of velocity
    var theta = this.vel.heading() + PI / 2;
    fill(127);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}





