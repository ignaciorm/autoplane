var h = 600;
var w = 1500;
var scl = 20;
var cols;
var terrain = [];

function setup(){
  console.log('this is the windowWidth: ' + windowWidth);
  createCanvas(w, h);
  fill(80,210,80);
  stroke(80,210,80);
  strokeWeight(1);

  cols = w/scl;
  rows = h/scl;
  var xof = 0;

  for (var x = 0; x < cols+1; x++) {
    terrain[x]= map(noise(xof),0,1,300,600);
    console.log(xof);
    console.log(noise(x));
    xof += 0.05;
  }
}

function draw() {

  background(70,70,140);

  beginShape(TRIANGLE_STRIP);
  for (var x = 0; x < cols+1; x++) {
    vertex(x*scl,h);
    vertex(x*scl,terrain[x]);
  }
  endShape();
}
