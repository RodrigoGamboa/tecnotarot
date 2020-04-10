var canvas;
let imgsF = [];
let imgsB = [];
//let button;
let numCard = 0;
let appearVal = 255;
let introCard = true;
let flipCard = false;
let inferiorMargin = 0;

function preload() {
  crystal = loadImage('images/CrystalBall.png');
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
  imgsB[0] = loadImage('images/TecnoTarot_1.1.png');
  imgsB[1] = loadImage('images/TecnoTarot_2.1.png');
  imgsB[2] = loadImage('images/TecnoTarot_3.1.png');
  imgsB[3] = loadImage('images/TecnoTarot_4.1.png');
  imgsB[4] = loadImage('images/TecnoTarot_5.1.png');
  imgsB[5] = loadImage('images/TecnoTarot_6.1.png');
  imgsB[6] = loadImage('images/TecnoTarot_7.1.png');
  imgsB[7] = loadImage('images/TecnoTarot_8.1.png');
  imgsB[8] = loadImage('images/TecnoTarot_9.1.png');
  imgsB[9] = loadImage('images/TecnoTarot_10.1.png');
  imgsB[10] = loadImage('images/TecnoTarot_11.1.png');
  imgsB[11] = loadImage('images/TecnoTarot_12.1.png');
  imgsB[12] = loadImage('images/TecnoTarot_13.1.png');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    //button = createButton('suerte!');
    //button.position();
    //button.resize(100, 100);
    //button.mousePressed(randomCard);

    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();
    canvas.background(255, 230, 0);
}

function draw() {
    if(introCard == true) {
      imgsF[numCard].resize(0, 3*windowHeight/4);
      image(imgsF[numCard], windowWidth/2, windowHeight/2);
      //Velocidad de aparición en móvil es muy lenta. En pc está bien. Arreglar este problema antes de volver a colocar fill y rect.
      //fill(255, 230, 0, appearVal);
      //rect(windowWidth/2, windowHeight/2, imgs[0].width, imgs[0].height);
      appearVal = appearVal - 1;
      if(appearVal < 0)
        introCard == false;
    }

    inferiorMargin = (windowHeight - imgsF[numCard].height) / 2;

    crystal.resize(0, inferiorMargin*0.5);
    image(crystal, windowWidth/2, windowHeight - inferiorMargin/2);

    if(numCard > 0) {
      imgsF[numCard].resize(0, 3*windowHeight/4);
      image(imgsF[numCard], windowWidth/2, windowHeight/2);
    }

    if(flipCard == true) {
      imgsB[numCard].resize(0, 3*windowHeight/4);
      image(imgsB[numCard], windowWidth/2, windowHeight/2);
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas.background(255, 230, 0);
}

function mouseClicked() {
  if(mouseX > (windowWidth/2 - imgsF[numCard].width/2) && mouseX < (windowWidth/2 + imgsF[numCard].width/2)) {
    if(mouseY > (windowHeight/2 - imgsF[numCard].height/2) && mouseY < (windowHeight/2 + imgsF[numCard].height/2)) {
      flipCard = true;
    }
  }

  if(mouseX > (windowWidth/2 - crystal.width/2) && mouseX < (windowWidth/2 + crystal.width/2)) {
    if(mouseY > (windowHeight - inferiorMargin/2 - crystal.height/2) && mouseY < (windowHeight - inferiorMargin/2 + crystal.height)) {
      numCard = int(random(1, 13));
      flipCard = false;
    }
  }
}
