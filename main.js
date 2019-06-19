var h = 700, w = 1920;
var scl = 10;
var cols;
var terrain = [];
var flyingspeed = 0.0; //intialized
cols = w/scl;
rows = h/scl;
var plane;
var x;
var fr = 30;

function setup(){
  console.log('this is the windowWidth: ' + windowWidth);
  createCanvas(w, h);
  frameRate(fr);
  plane = new Plane();
}

function draw() {
  background(70,70,140);

  terrain();
  plane.show();
  plane.gravity();

 if (plane.alt > (terrain[26]-10) || plane.alt < (terrain[26]-300)) {
   plane.resetpos();
 }
 if (keyIsDown(UP_ARROW)) {
   plane.jump();
 }
}


/*function keyPressed(){
  if (key === ' ') {
    plane.jump();
  }
}*/
