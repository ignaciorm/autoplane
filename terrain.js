function ground() {

  flyingspeed += 0.015;   //you can change flying speed here
  var xof = flyingspeed;
  for (var x = 0; x < cols+1; x++) {
    terrain[x]= map(noise(xof),0,1,50,450);
    console.log(xof);
    console.log(noise(x));
    xof += 0.05;
  }

  beginShape(TRIANGLE_STRIP);
  for (var x = 0; x < cols+1; x++) {
    vertex(x*scl,h);
    vertex(x*scl,terrain[x]);
  }
  endShape();
}
