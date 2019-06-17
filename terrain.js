function terrain() {

  background(70,70,140);
  beginShape(TRIANGLE_STRIP);
  for (var x = 0; x < cols+1; x++) {
    vertex(x*scl,h);
    vertex(x*scl,terrain[x]);
  }
  endShape();
}
