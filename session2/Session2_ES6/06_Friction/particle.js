class Particle {

  constructor(m, x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.accel = createVector(0, 0);
    this.mass = m;
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.accel.add(f);
  }

  update() {
    this.velocity.add(this.accel);
    this.position.add(this.velocity);
    this.accel.set(0, 0);

    //this.velocity.mult(0.9);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    fill(255);
    ellipse(this.position.x, this.position.y, this.mass * 8, this.mass * 8);
  }

  edges() {
    if (this.position.y > height) {
      this.velocity.y *= -0.9;
      this.position.y = height;
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
*/
