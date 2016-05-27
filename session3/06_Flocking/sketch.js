// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Flocking

// Demonstration of Craig Reynolds' "Flocking" behavior
// See: http://www.red3d.com/cwr/
// Rules: Cohesion, Separation, Alignment


var flock;

var cohesionSlider;
var separationSlider;
var alignmentSlider;

function setup() {
  var canvas = createCanvas(800, 400);
  canvas.parent('canvas');
  
  cohesionSlider   = createSlider(0, 5, 1, 0.1).parent('cohesion');
  separationSlider = createSlider(0, 5, 1, 0.1).parent('separation');
  alignmentSlider  = createSlider(0, 5, 1, 0.1).parent('alignment');
  
  flock = new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 80; i++) {
    var b = new Boid(width/2,height/2);
    flock.addBoid(b);
  }
}

function draw() {
  background(51);
  flock.run();
}


