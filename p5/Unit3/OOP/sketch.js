let cars = [];

function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }

}

function draw() {
  background(16, 30, 70);

  //big ellipse
  stroke(0);
  fill(100,149,237);
  ellipse(300,200,200,200);
  //small ellipse
  fill(255);
  ellipse(300,230,160,160);

  //left eye
  fill(255);
  ellipse(275,150,45,58);
  //right eye
  fill(255);
  ellipse(325,150,45,58);

  //left eyeball
  fill(0);
  ellipse(290,155,10,10);
  //right eyeball
  fill(0);
  ellipse(310,155,10,10);

  //nose
  fill(255,0,20);
  ellipse(300,180,26,26);
  stroke(0);
  line(300,193,300,240);

  //mouth
  stroke(0);
  line(300,240,250,218);
  stroke(0);
  line(300,240,350,218);

  //beard
  stroke(0);
  line(230,200,275,200);
  stroke(0);
  line(235,175,275,195);
  stroke(0);
  line(235,220,275,205);

  stroke(0);
  line(325,200,370,200);
  stroke(0);
  line(325,195,365,175);
  stroke(0);
  line(325,205,365,220);

  //body
  stroke(0);
  fill(100,149,237);
  rect(231,274,138,120,5);

  //tummy
  stroke(0);
  fill(255);
  ellipse(300,310,100,100);
  noStroke();
  fill(255);
  rect(231,258,138,12);

  //neckklace
  fill(250,0,0);
  rect(230,270,140,7);
  //bell
  stroke(0);
  fill(255,255,0);
  ellipse(300,286,27,27);

  //left arm
  stroke(0);
  fill(100,149,237);
  quad(232,275,195,320, 200,330, 232,310);
  fill(255);
  ellipse(200,324,25,25);

  //right arm
  stroke(0);
  fill(100,149,237);
  quad(370,275,405,320,400,330, 370,310);
  fill(255);
  ellipse(400,324,25,25);
  
  //pocket
  fill(255);
  stroke(0);
  arc(300, 310, 50, 50,0,PI, CHORD);

  fill(0);
  stroke(0);
  line(300,380,300,407);
  line(295,380,305,380);
  line(233,407,366,407);
  fill(255);
  arc(235, 401, 13, 13, PI / 2, 3 * PI / 2, OPEN);
  arc(365, 401, 13, 13, 3 * PI / 2, PI / 2,  OPEN);

  //moon
  fill(246, 231, 102);
  ellipse(250, 900, 1000, 1000);
  fill(244, 192, 91);
  ellipse(90, 470, 30, 20);
  ellipse(350, 490, 100, 50);
  ellipse(170, 430, 50, 35);
  ellipse(480, 490, 30, 20);

  //flower
  fill(51, 186, 111);
  rect(45, 420, 10, 85);
  fill(208, 50, 25);
  circle(50, 420, 25);
  ellipse(50, 415, 30, 15);
//  cars.push(new Car());  // for particle system
// but this is DANGEROUS because spawns MANY
// will crash browser!!! unless you have a way to delete

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].update();


  }

}


class Car {
  constructor() {
    // attributes
    this.pos = createVector(width , height);  // where it starts
    this.vel = createVector(random(2, 6), random(2, 4));  // direction
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);
    this.size = random(24, 120) ;
  }

  display() {
    fill(this.r, this.g, this.b, this.a) ;
//    ellipse(this.pos.x, this.pos.y, 30, 30);
    ellipse(this.pos.x, this.pos.y, 25);
// image(img1, this.pos.x, this.pos.y, 100, 100) ;

  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ;
  }

}
