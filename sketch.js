var canvas;
let img1_0, img1_1;

function preload() {
  img1_0 = loadImage('images/tecno2.png');
  img1_1 = loadImage('images/tecno2.png');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    imageMode(CENTER);
    canvas.background(255, 230, 0);
}

function draw() {
    img1_0.resize(0, height/2);
    image(img1_0, width/2, height/2);
    //ellipse(random(width), random(height), 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
