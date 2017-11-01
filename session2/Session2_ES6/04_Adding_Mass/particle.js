class Particle {

  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
  }

  edges() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }
}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/

Adding Mass
*/
