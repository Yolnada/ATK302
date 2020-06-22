let state = 0

function setup() {
  createCanvas(600,600);
}

function draw() {

  switch(state){
    case 0:
     background(150, 50, 50);
     //noStroke();
     strokeWeight(6);
     stroke(80);
     fill(255);
     rect(155, 180, 280, 178);

     fill(255);
     arc(295, 300, 300, 330, QUARTER_PI/2, PI*7/8);

     fill(0);
     arc(150, 150, 440, 225, QUARTER_PI/8, HALF_PI, PIE);

     fill(0);
     arc(440, 144, 230, 130, HALF_PI, HALF_PI*1.7);

     fill(0);
     arc(295, 173, 290, 279, PI, QUARTER_PI/4);

     noFill();
     //eyes
     stroke(51);
     arc(225, 280, 100, 100, 0, PI, CHORD);
     arc(365, 280, 100, 100, 0, PI, CHORD);

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
     fill(0);
     ellipse(0, 0, 160, 160);

     fill(255);
     ellipse( 600, 0, 200, 200);
     fill(0);
     ellipse(600, 0, 160, 160);

     fill(255);
     strokeWeight(2);
     stroke(0);
     textSize(35);
     text('Tooth                              mouth', 40, 190);
     text('pointed                            benefit', 20, 400);
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

     fill(0)
     arc(150, 150, 440, 225, QUARTER_PI/8, HALF_PI, PIE);

     fill(0)
     arc(440, 144, 230, 130, HALF_PI, HALF_PI*1.7);

     fill(0)
     arc(295, 173, 290, 279, PI, QUARTER_PI/4);

     noFill();
     //eyes
     stroke(51);
     arc(225, 280, 100, 100, 0, PI, CHORD);
     arc(365, 280, 100, 100, 0, PI, CHORD);

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
     text('Tooth                              mouth', 40, 190);
     text('pointed                            benefit', 20, 400);
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

     fill(0);
     arc(150, 150, 440, 225, QUARTER_PI/8, HALF_PI, PIE);

     fill(0);
     arc(440, 144, 230, 130, HALF_PI, HALF_PI*1.7);

     fill(0);
     arc(295, 173, 290, 279, PI, QUARTER_PI/4);

     noFill();
     //eyes
     stroke(51);
     arc(225, 280, 100, 100, 0, PI, CHORD);
     arc(365, 280, 100, 100, 0, PI, CHORD);

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
     text('Tooth                              mouth', 40, 190);
     text('pointed                            benefit', 20, 400);
     break;
  }

}

function mouseReleased(){
  state = state +1;
  if(state > 2){
    state = 0;
  }
}
