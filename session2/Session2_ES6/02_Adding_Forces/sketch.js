let particle;

function setup() {

  createCanvas(600, 360);
  particle = new Particle();
}

function draw() {

  background(51);
  particle.update();
  particle.show();

  let gravity = createVector(0, 0.1);
  particle.applyForce(gravity);
}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/

Adding Forces
*/
