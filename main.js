var h = 700;
var w = 1920;
var scl = 10;
var cols;
var terrain = [];
var flyingspeed = 0.0; //intialized
cols = w/scl;
rows = h/scl;

function setup(){
  console.log('this is the windowWidth: ' + windowWidth);
  createCanvas(w, h);
  fill(80,210,80);
  stroke(80,210,80);
  strokeWeight(1);

}

function draw() {
  background(70,70,140);

  flyingspeed += 0.015;   //you can change flying speed here
  var xof = flyingspeed;
  for (var x = 0; x < cols+1; x++) {
    terrain[x]= map(noise(xof),0,1,200,550);
    console.log(xof);
    console.log(noise(x));
    xof += 0.025 ;
  }


  beginShape(TRIANGLE_STRIP);
  for (var x = 0; x < cols+1; x++) {
    vertex(x*scl,h);
    vertex(x*scl,terrain[x]);
  }
  endShape();
}
