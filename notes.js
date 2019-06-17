for (var x = 0; x < canvassz ; x++) {
  beginShape(TRIANGLE_STRIP);
  for (var y = 0; y < canvassz; y++) {
    vertex(x*scl,y*scl);
    vertex(x*scl,(y+1)*scl);
  }
  endShape()
}

beginShape(TRIANGLE_STRIP);
vertex(0,600);
vertex(0,500);
vertex(50,600);
vertex(50,500);
endShape();
