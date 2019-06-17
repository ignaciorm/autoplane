function terrain(){
  fill(80,210,80);
  stroke(80,210,80);

  flyingspeed += 0.015;   //you can change flying speed here
  var xof = flyingspeed;
  for (var x = 0; x < cols+1; x++) {
    terrain[x]= map(noise(xof),0,1,200,550);
    xof += 0.025 ;
  }


  beginShape(TRIANGLE_STRIP);
  for (var x = 0; x < cols+1; x++) {
    vertex(x*scl,h);
    vertex(x*scl,terrain[x]);
  }
  endShape();
}
