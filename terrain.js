function terrain(){
  fill(80,210,80);
  stroke(80,210,80);

  flyingspeed += 0.025;   //you can change flying speed here
  var xof = flyingspeed;
  for (var x = 0; x < cols+1; x++) {
    terrain[x]= map(noise(xof),0,1,400,650);
    xof += 0.025 ;
  }


  beginShape(TRIANGLE_STRIP);
  for (var x = 0; x < cols+1; x++) {
    vertex(x*scl,h);
    vertex(x*scl,terrain[x]);
  }
  endShape();

  beginShape(TRIANGLE_STRIP);
  for (var x = 0; x < cols+1; x++) {
    vertex(x*scl,0);
    vertex(x*scl,terrain[x]-300);
  }
  endShape();
}
