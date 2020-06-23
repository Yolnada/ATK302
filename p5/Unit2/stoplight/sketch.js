let state = 0;
let timer = 0;
let x = 0;
let velocity = 1;
let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {

  background('brown');
    let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.4);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    fill(240);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  };

  stroke(0);
  fill('black');
  rect(width/ 2, height/ 2, 200, 600);

  //car code
  stroke(255,128,128);
  strokeWeight(5);
  fill('blue');
  rect(x, 750, 75, 20);
  x = x + velocity ;
  if ( x >width){
    x = 0;
}


  switch (state) {

    case 0://red
      text("0", 100, 100);
      stroke(0);
      fill('red');
      ellipse(width / 2, height / 2 -170, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 0;
      break;

    case 1://green
      text("1", 100, 100);
      stroke(0);
      fill('grey');
      ellipse(width / 2, height / 2 -170, 150, 150);
      ellipse(width/ 2, height/ 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 10;
      break;

    case 2:
      text("2", 100, 100);
      stroke(0);
      fill ('grey');
      ellipse(width / 2, height / 2 -170, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill ('grey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 5;
      break;

  }

  timer = timer + 1;
  if (timer > 100){
    timer = 0;
     state++;
  if (state > 2) state = 0;
  }

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
