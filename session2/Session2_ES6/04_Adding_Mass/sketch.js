let particle1;
let particle2;

function setup() {

  createCanvas(600, 360);
  particle1 = new Particle(200, 100, 3);
  particle2 = new Particle(400, 100, 1);
}

function draw() {

  background(51);
  let wind = createVector(0.1, 0);

  let gravity1 = createVector(0, 0.2 * particle1.mass);
  let gravity2 = createVector(0, 0.2 * particle2.mass);


  particle1.applyForce(gravity1);
  particle2.applyForce(gravity2);

  if (mouseIsPressed) {
    particle1.applyForce(wind);
    particle2.applyForce(wind);
  }

  particle1.update();
  particle1.show();
  particle1.edges();
  particle2.update();
  particle2.show();
  particle2.edges();
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
