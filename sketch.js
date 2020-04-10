var canvas;
let imgs = [];
let button;
let val = 0;


function preload() {
  imgs[0] = loadImage('images/TecnoTarot_1.0.png');
  imgs[1] = loadImage('images/TecnoTarot_2.0.png');
  imgs[2] = loadImage('images/TecnoTarot_3.0.png');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    button = createButton('click me');
    //button.position(random(width), random(height));
    button.mousePressed(randomCard);

    imageMode(CENTER);
    canvas.background(255, 230, 0);
}

function draw() {
    //print(val);
    imgs[val].resize(0, height/2);
    image(imgs[val], width/2, height/2);
    ellipse(random(width), random(height), val, val);
}

function randomCard() {
  val = int(random(0,3));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


/*
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(changeBG);
}

function draw() {
  ellipse(width/2, height/2, val, val);
}

function changeBG() {
  val = random(255);
  background(val);
  return 0;
}
*/
