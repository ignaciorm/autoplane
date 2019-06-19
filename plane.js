function Plane() {
  this.origin = h/2;
  this.alt  = this.origin;

  this.show =function() {
    fill(210,80,80);
    stroke(210,80,80);

    rect(200,this.alt,50,10);

  }
  this.gravity = function(){
    this.g = -3;
    this.alt -= this.g;
  }

  this.resetpos = function(){
    this.alt  = this.origin;
  }

  this.jump = function(){
    this.alt -= 10;
  }
}
