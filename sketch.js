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

    button = createButton('suerte!');
    //button.position();
    //button.resize(100, 100);
    button.mousePressed(randomCard);

    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();
    canvas.background(255, 230, 0);
}

function draw() {
    if(introCard == true) {
      imgs[0].resize(0, 3*windowHeight/4);
      image(imgs[0], windowWidth/2, windowHeight/2);
      //Velocidad de aparición en móvil es muy lenta. En pc está bien. Arreglar este problema antes de volver a colocar fill y rect.
      //fill(255, 230, 0, appearVal);
      //rect(windowWidth/2, windowHeight/2, imgs[0].width, imgs[0].height);
      appearVal = appearVal - 1;
      if(appearVal < 0)
        introCard == false;
    }

    if(val > 0) {
      imgs[val].resize(0, 3*windowHeight/4);
      image(imgs[val], windowWidth/2, windowHeight/2);

    }
}

function randomCard() {
  val = int(random(1, 2));
  //val = 10;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas.background(255, 230, 0);
}
