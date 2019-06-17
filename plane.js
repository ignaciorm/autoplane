function Plane() {
  var alt  = h/6;

  this.show =function() {
    fill(210,80,80);
    stroke(210,80,80);

    rect(50,alt,50,10);

  }
  this.gravity = function(){
    var g = -1;
    alt -= g;
  }
}
