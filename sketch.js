var canvas;
let imgsF = [];
let imgsB = [];
let button;
let val = 0;
let transparency = 0;
let appearVal = 255;
let introCard = true;

function preload() {
  imgsF[0] = loadImage('images/TecnoTarot_1.0.png');
  imgsF[1] = loadImage('images/TecnoTarot_2.0.png');
  imgsF[2] = loadImage('images/TecnoTarot_3.0.png');
  imgsF[3] = loadImage('images/TecnoTarot_4.0.png');
  imgsF[4] = loadImage('images/TecnoTarot_5.0.png');
  imgsF[5] = loadImage('images/TecnoTarot_6.0.png');
  imgsF[6] = loadImage('images/TecnoTarot_7.0.png');
  imgsF[7] = loadImage('images/TecnoTarot_8.0.png');
  imgsF[8] = loadImage('images/TecnoTarot_9.0.png');
  imgsF[9] = loadImage('images/TecnoTarot_10.0.png');
  imgsF[10] = loadImage('images/TecnoTarot_11.0.png');
  imgsF[11] = loadImage('images/TecnoTarot_12.0.png');
  imgsF[12] = loadImage('images/TecnoTarot_13.0.png');
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
      imgsF[0].resize(0, 3*windowHeight/4);
      image(imgsF[0], windowWidth/2, windowHeight/2);
      //Velocidad de aparición en móvil es muy lenta. En pc está bien. Arreglar este problema antes de volver a colocar fill y rect.
      //fill(255, 230, 0, appearVal);
      //rect(windowWidth/2, windowHeight/2, imgs[0].width, imgs[0].height);
      appearVal = appearVal - 1;
      if(appearVal < 0)
        introCard == false;
    }

    if(val > 0) {
      imgsF[val].resize(0, 3*windowHeight/4);
      image(imgsF[val], windowWidth/2, windowHeight/2);

    }
}

function randomCard() {
  val = int(random(1, 13));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas.background(255, 230, 0);
}
