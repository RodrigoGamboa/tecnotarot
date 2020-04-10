var canvas;
let imgs = [];
let button;
let val = 0;
let transparency = 0;
let appearVal = 255;
let introCard = true;

function preload() {
  imgs[0] = loadImage('images/TecnoTarot_1.0.png');
  imgs[1] = loadImage('images/TecnoTarot_2.0.png');
  imgs[2] = loadImage('images/TecnoTarot_3.0.png');
  imgs[10] = loadImage('images/TecnoTarot_1.1.png');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    button = createButton('click me');
    //button.position();
    //button.resize(100, 100);
    button.mousePressed(randomCard);

    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();
    canvas.background(255, 230, 0);
}

function draw() {

    //imgs[0].resize(0, 3*windowHeight/4);
    //tint(255, 20);
    if(introCard == true) {
      image(imgs[0], windowWidth/2, windowHeight/2);
      fill(255, 230, 0, appearVal);
      rect(windowWidth/2, windowHeight/2, imgs[0].width, imgs[0].height);
      appearVal = appearVal - 1;
      if(appearVal < 0)
        introCard == false;
    }
    /*
    imgs[val].resize(0, 3*windowHeight/4);
    //tint(255, 255);
    //image(imgs[val], windowWidth/2, windowHeight/2);
    if(transparency < 255) {
        transparency++;
    } else {
      transparency = 0;
    }
    //fill(255, 230, 0, transparency);
    //rect(0, 0, windowWidth, windowHeight);
    */
}

function randomCard() {
  //val = int(random(0,14));
  val = random(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas.background(255, 230, 0);
}
