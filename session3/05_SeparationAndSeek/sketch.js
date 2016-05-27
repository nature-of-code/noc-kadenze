// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Separation and Seek

// Separation
// Via Reynolds: http://www.red3d.com/cwr/steer/

// A list of vehicles
var vehicles = [];

function setup() {
  createCanvas(640,360);
  // We are now making random vehicles and storing them in an array
  for (var i = 0; i < 75; i++) {
    vehicles.push(new Vehicle(random(width),random(height)));
  }
}

function draw() {
  background(51);


  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].applyBehaviors(vehicles);
    vehicles[i].update();
    vehicles[i].borders();
    vehicles[i].display(); 
  }

}


function mouseDragged() {
  // vehicles.push(new Vehicle(mouseX,mouseY));
}



