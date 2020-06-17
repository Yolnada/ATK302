function setup() {
  createCanvas(400,400);
}

function draw() {
  background(173,66,50);
  noStroke();

  fill(224,227,210);
  circle(200,150,50);

  fill(33,30,40);
  quad(150,220,250,220,400,400,0,400);

  stroke(255,128,128);
  strokeWeight(5);
  fill(224,227,210);
  ellipse(100,100,100,100);

  stroke(0);
  line(0,0,100,100);
  arc(200,50,50,50,PI,TWO_PI);
  arc(150,50,50,50,PI,TWO_PI);

}
