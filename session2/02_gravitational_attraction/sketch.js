// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Gravitational Attraction

// One particle, one attractor
var particle;
var attractor;

function setup() {
  createCanvas(640, 360);
  particle = new Particle();
  attractor = new Attractor(width/2, height/2);
}

function draw() {
  background(51);

  // Attractor attracts particle
  var force = attractor.calculateAttraction(particle);
  particle.applyForce(force);

  particle.update();
  particle.display();

  attractor.display();
}
