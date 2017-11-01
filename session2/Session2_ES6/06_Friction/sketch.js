let particle1;
let particle2;
let liquid;

function setup() {
  createCanvas(600, 600);
  //create liquid object
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

  particle1 = new Particle(8, 150, 0);
  particle2 = new Particle(12, 450, 0);
}

function draw() {
  background(127);

  //draw water
  liquid.show();

  //is the mover in the liquid?
  if (liquid.contains(particle1)) {
    //calculate drag force
    let dragForce = liquid.calculateDrag(particle1);
    //apply drag force to mover
    particle1.applyForce(dragForce);
  }

  //let wind = createVector(0.1, 0);

  //gravity is scaled by mass here
  let gravity1 = createVector(0, 0.1 * particle1.mass);
  //apply gravity
  particle1.applyForce(gravity1);


  //is the mover in the liquid?
  if (liquid.contains(particle2)) {
    //calculate drag force
    let dragForce = liquid.calculateDrag(particle2);
    //apply drag force to mover
    particle2.applyForce(dragForce);
  }

  //let wind = createVector(0.1, 0);

  //gravity is scaled by mass here
  let gravity2 = createVector(0, 0.1 * particle2.mass);
  //apply gravity
  particle2.applyForce(gravity2);

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
*/
