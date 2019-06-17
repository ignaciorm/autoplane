var h = 700, w = 1920;
var scl = 10;
var cols;
var terrain = [];
var flyingspeed = 0.0; //intialized
cols = w/scl;
rows = h/scl;
var plane;

function setup(){
  console.log('this is the windowWidth: ' + windowWidth);
  createCanvas(w, h);
  plane = new Plane();
}

function draw() {
  background(70,70,140);
  terrain();
  plane.show();
  plane.gravity();
}
