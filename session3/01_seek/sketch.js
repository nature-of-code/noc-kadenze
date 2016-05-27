// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Seek Steering Behavior

// A vehicle
var vehicle;

function setup() {
  createCanvas(640, 360);
  // Create the vehicle
  vehicle = new Vehicle(320, 180);
  
}

function draw() {
  background(51);
  
  // Seek the target
  var target = createVector(mouseX, mouseY);
  vehicle.seek(target);
  
  // Update and display
  vehicle.update();
  vehicle.display();
}