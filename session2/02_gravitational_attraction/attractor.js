// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Gravitational Attraction

var Attractor = function() {
  this.pos = createVector(width/2, height/2);
  this.mass = 20;
  this.G = 1;

  this.calculateAttraction = function(p) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    var distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  }

  // Method to display
  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.mass*2, this.mass*2);
  }
}
