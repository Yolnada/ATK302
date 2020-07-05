let cars = []; // an array for the objects
let frogPos ;
let state = -1;
let timer = 0 ;
let bg1, bg2, bg3;
let img1,img2,img3,img4,img5,img6,img7;
let song1;
let f;

function preload(){
  song1 = loadSound('assets/sounds/donkey.mp3');


  song1.loop();


//  song1.pause();

}


function setup() {
  createCanvas(600,430);

  bg1 = loadImage('assets/images/background1.jpg');
  bg3 = loadImage('assets/images/background3and4.jpg')

  img1 = loadImage('assets/images/money.png');
  img2 = loadImage('assets/images/Gun.png');
  img3 = loadImage('assets/images/yesorno.png');
  img4 = loadImage('assets/images/wlcome2.png');
  img5 = loadImage('assets/images/welcome3.png');
  img6 = loadImage('assets/images/win.png');
  img7 = loadImage('assets/images/lose.png');


  f = loadFont('assets/font/Somatic-Rounded.otf');




frogPos = createVector(width/2, height-120);

  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());  // put the objects onto the cars array
  }
}


function draw () {

  textFont(f);

switch(state){
   case -1:
   song1.play();
   state = 0;
   break;

   case 0:
   image(bg1,0, 0); //put an image here later
   image(img3, 150, 120);
   image(img4, 150, 200);
   image(img5, 400, 300);
   textSize(40);
   text("welcome to my game!", 110, 80);
   break;

   case 1: // game state
   game();
   timer++ ;
   if (timer > 200) {
      state = 3;
      timer = 0;
   }

   break;

   case 2: // wi state
   image(bg3,0, height-430);
   image(img6, 220, 180);
   fill(0);
   textSize(40);
   text("You Won!", 220, 200)

   break;

   case 3: // lose state
   image(bg3,0, height-430);
   image(img7, 200, 160);
   fill(0)
   textSize(40);
   text("Sorry you lost, try again", 100, 140);
   break;

}


}

function reset(){
  cars = [] ;
  timer = 0 ;
  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());  // put the objects onto the cars array
  }
}

function mouseReleased (){
  switch(state){
     case 0:
     state = 1 ;
     break;

     case 2: // win
     reset();
     state = 0 ;
     break;

     case 3: // lose
     reset();
     state = 0 ;
     break;

  }

}


function game() {
  background('white');

    // iterate through the array, display them, update them
    for (let i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].update();

    if(cars[i].pos.dist(frogPos) < 50){
      cars.splice(i,1); // delete a car
    }

    }

    //cheak if there are any cars left
    if(cars.length == 0) {
    state = 2 ; // go to win state
  }

    // draw a "frog" here
    //fill('green') ;
    //ellipse(frogPos.x, frogPos.y, 70, 70);
    //checkForKeys();
    image(img2, frogPos.x, frogPos.y, 80,80);
    frogPos.x = mouseX;
    frogPos.y = mouseY;
  }



 function checkForKeys() {
   if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
   if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
   if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
   if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

 }




  // this is the Car class!
  class Car {
    constructor() {
      // attributes
      this.pos = createVector(width / 2, height / 2); // where it starts
      this.vel = createVector(random(-3, 3), random(-3, 3)); // direction
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.a = random(255);
    }
    // methods

     display() { // this displays the object
        //fill(this.r, this.g, this. b, this.a)
        //ellipse(this.pos.x, this.pos.y, 30, 30);
        image(img1, this.pos.x, this.pos.y, 40, 40) ;
     }

     update() { // this moves the object
       this.pos.add(this.vel);  // add the velocity to the position

       // loop the objects around the screen
       if (this.pos.x > width) this.pos.x = 0;
       if (this.pos.x < 0) this.pos.x = width;
       if (this.pos.y > height) this.pos.y = 0;
       if (this.pos.y < 0) this.pos.y = height;
     }


   }
   function touchStarted() {
  getAudioContext().resume();
}
