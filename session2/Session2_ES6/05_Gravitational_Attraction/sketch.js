let particle;
let attractor;

function setup() {

  createCanvas(600, 360);
  particle = new Particle(400, 50, 1);
  attractor = new Attractor(width / 2, height / 2);
}

function draw() {
  background(51);

  let force = attractor.calculateAttraction(particle);

  particle.applyForce(force);
  particle.update();
  particle.show();
  attractor.show();
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
