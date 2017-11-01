class Particle {

  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  applyForce(force) {
    this.acc = force;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 24, 24);
  }

}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/

this.info
Adding Forces
*/
