let state = 0;
let eyesValue = 0;
let eyesColor = 0;
var x = 0;
var song1;
var f;

function preload(){
  song1 = loadSound('assets/skate.mp3');
  f = loadFont('assets/Teddy.otf');
}

function setup() {
  createCanvas(600,600);
  song1.play();
}

function draw() {
  textFont(f);

  switch(state){
    case 0:
     background(150, 50, 50);

     //noStroke();
     strokeWeight(6);
     stroke(80);

     //face
     fill(255, 255, 235);
     rect(155, 180, 280, 178);

     fill(255, 255, 235);
     arc(295, 300, 300, 330, QUARTER_PI/2, PI*7/8);
     //hair
     fill(0);
     arc(150, 150, 440, 225, QUARTER_PI/8, HALF_PI, PIE);

     fill(0);
     arc(440, 144, 230, 130, HALF_PI, HALF_PI*1.7);

     fill(0);
     arc(295, 173, 290, 240, PI, QUARTER_PI/4);

     noFill();
     stroke(51);
     //eyes
     arc(225, 280, 100, 100, 0, PI, CHORD);
     arc(365, 280, 100, 100, 0, PI, CHORD);
     fill(150+eyesColor/2, 50+eyesColor, 50+eyesColor);//red turn white
     arc(225, 280, 80+eyesValue, 80+eyesValue, 0, PI, CHORD);
     arc(365, 280, 80+eyesValue, 80+eyesValue, 0, PI, CHORD);
     fill(50+eyesColor/2, 150-eyesColor/2, 50);//green turn red
     arc(225, 280, 60+eyesValue, 60+eyesValue, 0, PI, CHORD);
     arc(365, 280, 60+eyesValue, 60+eyesValue, 0, PI, CHORD);
     fill(50, 50+eyesColor/2, 150-eyesColor/2);//blue turn green
     arc(225, 280, 40+eyesValue, 40+eyesValue,  0, PI, CHORD);
     arc(365, 280, 40+eyesValue, 40+eyesValue,  0, PI, CHORD);
     fill(50, 50, 50+eyesColor/2);//black turn blue
     arc(225, 280, 20+eyesValue, 20+eyesValue, 0, PI, CHORD);
     arc(365, 280, 20+eyesValue, 20+eyesValue, 0, PI, CHORD);
     fill(50, 50, 50);//black
     arc(225, 280, 0+eyesValue, 0+eyesValue, 0, PI, CHORD);
     arc(365, 280, 0+eyesValue, 0+eyesValue, 0, PI, CHORD);

     //nose
     noFill();
     line(295, 330, 265, 370);
     //mouth
     arc(295, 150, 520, 520, HALF_PI*6.5/8, HALF_PI*9.5/8);
     //teeth
     line(230, 402, 230, 430);
     line(230, 430, 248, 410);
     line(360, 402, 360, 430);
     line(360, 430, 342, 410);


     //text
     fill('black')
     strokeWeight(2);
     stroke(0);
     textSize(35);
     text('Tooth                                      mouth', 40, 190);
     text('pointed                                    benefit', 20, 400);
     fill(random(255), random(255), random(255));
     text('Glib', x, 540);
     x += 3;
     if (x > 700){
       x = 0;
     }
     break;

    case 1:
     background(50, 150, 50);
     //noStroke();
     strokeWeight(6);
     stroke(80);
     fill(255);
     rect(155, 180, 280, 178);

     fill(255);
     arc(295, 300, 300, 330, QUARTER_PI/2, PI*7/8);
     //hair
     fill(128, 0, 128)
     arc(150, 150, 440, 225, QUARTER_PI/8, HALF_PI, PIE);

     fill(128, 0, 128)
     arc(440, 144, 230, 130, HALF_PI, HALF_PI*1.7);

     fill(128, 0, 128)
     arc(295, 173, 290, 240, PI, QUARTER_PI/4);

     noFill();
     //eyes
     stroke(51);
     arc(225, 280, 100, 100, 0, PI, CHORD);
     arc(365, 280, 100, 100, 0, PI, CHORD);
     fill(150+eyesColor/2, 50+eyesColor, 50+eyesColor);//red turn white
     arc(225, 280, 80+eyesValue, 80+eyesValue, 0, PI, CHORD);
     arc(365, 280, 80+eyesValue, 80+eyesValue, 0, PI, CHORD);
     fill(50+eyesColor/2, 150-eyesColor/2, 50);//green turn red
     arc(225, 280, 60+eyesValue, 60+eyesValue, 0, PI, CHORD);
     arc(365, 280, 60+eyesValue, 60+eyesValue, 0, PI, CHORD);
     fill(50, 50+eyesColor/2, 150-eyesColor/2);//blue turn green
     arc(225, 280, 40+eyesValue, 40+eyesValue,  0, PI, CHORD);
     arc(365, 280, 40+eyesValue, 40+eyesValue,  0, PI, CHORD);
     fill(50, 50, 50+eyesColor/2);//black turn blue
     arc(225, 280, 20+eyesValue, 20+eyesValue, 0, PI, CHORD);
     arc(365, 280, 20+eyesValue, 20+eyesValue, 0, PI, CHORD);
     fill(50, 50, 50);//black
     arc(225, 280, 0+eyesValue, 0+eyesValue, 0, PI, CHORD);
     arc(365, 280, 0+eyesValue, 0+eyesValue, 0, PI, CHORD);

     //nose
     noFill(0);
     line(295, 330, 265, 370);
     //mouth
     arc(295, 150, 520, 520, HALF_PI*6.5/8, HALF_PI*9.5/8);
     //teeth
     line(230, 402, 230, 430);
     line(230, 430, 248, 410);
     line(360, 402, 360, 430);
     line(360, 430, 342, 410);

     fill(random(255), random(255), random(255));
     ellipse(0, 0,200, 200);
     fill(0);
     ellipse(0, 0, 160, 160);

     fill(random(255), random(255), random(255));
     ellipse( 600, 0, 200, 200);
     fill(0);
     ellipse(600, 0, 160, 160);

     fill(random(255), random(255), random(255));
     strokeWeight(2);
     stroke(0);
     textSize(35);
     text('Tooth                                      mouth', 40, 190);
     text('pointed                                    benefit', 20, 400);

     break;

    case 2:
     background(50, 50, 150);
     //noStroke();
     strokeWeight(6);
     stroke(80);
     fill(255);
     rect(155, 180, 280, 178);

     fill(255);
     arc(295, 300, 300, 330, QUARTER_PI/2, PI*7/8);
     //hair
     fill(220, 20, 60);
     arc(150, 150, 440, 225, QUARTER_PI/8, HALF_PI, PIE);

     fill(220, 20, 60);
     arc(440, 144, 230, 130, HALF_PI, HALF_PI*1.7);

     fill(220, 20, 60);
     arc(295, 173, 290, 240, PI, QUARTER_PI/4);

     noFill();
     //eyes
     stroke(51);
     arc(225, 280, 100, 100, 0, PI, CHORD);
     arc(365, 280, 100, 100, 0, PI, CHORD);
     fill(150+eyesColor/2, 50+eyesColor, 50+eyesColor);//red turn white
     arc(225, 280, 80+eyesValue, 80+eyesValue, 0, PI, CHORD);
     arc(365, 280, 80+eyesValue, 80+eyesValue, 0, PI, CHORD);
     fill(50+eyesColor/2, 150-eyesColor/2, 50);//green turn red
     arc(225, 280, 60+eyesValue, 60+eyesValue, 0, PI, CHORD);
     arc(365, 280, 60+eyesValue, 60+eyesValue, 0, PI, CHORD);
     fill(50, 50+eyesColor/2, 150-eyesColor/2);//blue turn green
     arc(225, 280, 40+eyesValue, 40+eyesValue,  0, PI, CHORD);
     arc(365, 280, 40+eyesValue, 40+eyesValue,  0, PI, CHORD);
     fill(50, 50, 50+eyesColor/2);//black turn blue
     arc(225, 280, 20+eyesValue, 20+eyesValue, 0, PI, CHORD);
     arc(365, 280, 20+eyesValue, 20+eyesValue, 0, PI, CHORD);
     fill(50, 50, 50);//black
     arc(225, 280, 0+eyesValue, 0+eyesValue, 0, PI, CHORD);
     arc(365, 280, 0+eyesValue, 0+eyesValue, 0, PI, CHORD);

     //nose
     noFill();
     line(295, 330, 265, 370);
     //mouth
     arc(295, 150, 520, 520, HALF_PI*6.5/8, HALF_PI*9.5/8);
     //teeth
     line(230, 402, 230, 430);
     line(230, 430, 248, 410);
     line(360, 402, 360, 430);
     line(360, 430, 342, 410);

     fill(255);
     ellipse(0, 0,200, 200);
     fill(random(255), random(255), random(255));
     ellipse(0, 0, 160, 160);

     fill(255);
     ellipse( 600, 0, 200, 200);
     fill(random(255), random(255), random(255));
     ellipse(600, 0, 160, 160);

     fill(random(255), random(255), random(255));
     strokeWeight(2);
     stroke(0);
     textSize(35);
     text('Tooth                                      mouth', 40, 190);
     text('pointed                                    benefit', 20, 400);
     break;
  }

}

function mouseReleased(){
  state = state +1;
  if(state > 2){
    state = 0;
    song1.stop();
  }

}
