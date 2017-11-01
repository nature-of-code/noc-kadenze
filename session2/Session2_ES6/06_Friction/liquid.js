class Liquid {

  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  contains(m) {
    let l = m.position;
    return l.x > this.x && l.x < this.x + this.w && l.y > this.y && l.y < this.y + this.h;
  }

  calculateDrag(m) {
    let speed = m.velocity.mag();
    let dragMagnitude = this.c + speed * speed;

    let dragForce = m.velocity.copy();
    dragForce.mult(-1);
    dragForce.setMag(dragMagnitude);
    // dragForce.normalize();
    // dragForce.mult(dragMagnitude);
    return dragForce;
  }

  show() {
    noStroke();
    fill(50);
    rect(this.x, this.y, this.w, this.h);
  }

}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/
*/
