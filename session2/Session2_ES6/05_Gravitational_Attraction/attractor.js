class Attractor {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = 20;
    this.G = 1;
  }

  calculateAttraction(p) {
    // Calculate direction of force
    let force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    let distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    let strength = (this.G * this.mass * p.mass) / (distance * distance);
    // Get force vector -> magnitude * direction
    force.mult(strength);
    return force;
  }

  show() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass * 2, this.mass * 2);
  }
}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/

Gravitational Attraction
*/
