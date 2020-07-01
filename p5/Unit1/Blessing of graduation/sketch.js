var fireworks = [];
var gravity;

function setup() {
    createCanvas(700,600);
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    // fireworks.push(new Firework());
    stroke(255);
    strokeWeight(4);

}

function draw() {
    background(0, 25);
    fill('red')
  textSize(25);
  text('最敬爱的班助理，祝你毕业快乐', 180, 200);
  text('前程似锦，不负韶华，熠熠生辉', 180, 300);
    if (random(1) < 0.1) {
        fireworks.push(new Firework());
    }
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}

function Particle(x, y, hue, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hue = hue;

    if (this.firework) {
        this.vel = createVector(0, random(-20, -8));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 10));
    }

    this.acc = createVector(0, 0);

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        if (!this.firework) {
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function() {
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        if (!this.firework) {
            strokeWeight(2);
            stroke(hue, 255, 255, this.lifespan);
        } else {
            strokeWeight(4)
            stroke(hue, 255, 255);
        }

        point(this.pos.x, this.pos.y);
    }
}

function Firework() {
    this.hue = random(255);
    this.firework = new Particle(random(width), height, this.hue, true);
    this.exploded = false;
    this.particles = [];

    this.done = function() {
        if (this.exploded && this.particles.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    this.update = function() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for (var i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    }

    this.explode = function() {
        for (var i = 0; i < 20; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, false);
            this.particles.push(p);
        }
    }

    this.show = function() {
        if (!this.exploded) {
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}
