var my robot;

function preload(){
  song1 = loadSound('sounds/assets/donkey.mp3')
}

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);
  song1.play()
}

  //rectagular center mode
  rectMode(CENTER);
  //robot head
  strokeWeight(8);

  square(200, 200, 200, 20);
  //robot mouth
  rect(200, 255, 100, 30, 5);
  //ellipse center mode
  ellipseMode(CENTER);

  strokeWeight(3);
  //robot left eye
  ellipse(150, 166, 36, 36);
  //robot right eye
  ellipse(250, 166,36,36);
  //robot overhead antenna base of the robot
  arc(200, 96, 30, 15, PI, 2*PI);
  //robot overhead
  line(200, 86, 210, 30);
  //robot overhead end
  circle(210, 30, 15);
  //robot nose
  triangle(185, 220, 215, 220, 200, 170);
  //rbot left ear
  quad(78, 170, 98, 160, 98, 220, 78, 210);
  //robt right ear
  quad(322, 170, 302, 160, 302, 220, 322, 210);

  strokeWeight(10);
  //robot left eyeball
  circle(144, 160, 10);
  //robot right eyeball
  circle(244, 160, 10);

  textSize(15);
  textAlign(CENTER);
  text('Let me give you a grand introduction! This is my favorite robot no.7 robot, it is assembled for her by me, it has a square head, feel clumsy, but it is very cute!',  200, 600, 300, 500);

  if (mouseIsPressed) {
  rectMode(CENTER);

  strokeWeight(8);

  fill('black');
  square(200, 200, 200, 20);

  fill('yellow');
  rect(200, 255, 100, 30, 5);

  ellipseMode(CENTER);
  strokeWeight(3);

  fill('yellow');
  ellipse(150, 166, 36, 36);

  fill('yellow');
  ellipse(250, 166,36,36);

  arc(200, 96, 30, 15, PI, 2*PI);

  line(200, 86, 210, 30);

  circle(210, 30, 15);

  triangle(185, 220, 215, 220, 200, 170);

  line(200, 240, 200, 270);

  line(175, 240, 175, 270);

  line(225, 240, 225, 270);

  quad(78, 170, 98, 160, 98, 220, 78, 210);

  quad(322, 170, 302, 160, 302, 220, 322, 210);

  strokeWeight(10);

  circle(155, 160, 10);

  circle(255, 160, 10);

  textSize(15);
  fill('green');
  textAlign(CENTER);
  text('Let me give you a grand introduction! This is my favorite robot no.7 robot, it is assembled for her by me, it has a square head, feel clumsy, but it is very cute!',  200, 600, 300, 500);
      }
}
/*
6/20/20 0.5 hours -research, looking at other example
6/21/20 2 hours -creating coded shape primitives in P5JS
6/21/20 0.5hours -create a sound
*/
