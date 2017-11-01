let particle;

function setup() {

  createCanvas(600, 360);
  particle = new Particle();
}

function draw() {

  background(51);
  let gravity = createVector(0, 0.1);
  let wind = createVector(0.1, 0);

  particle.applyForce(gravity);

  if (mouseIsPressed) {
    particle.applyForce(wind);
  }

  particle.update();
  particle.show();
  particle.edges();
}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/

Force Accumulation
*/
