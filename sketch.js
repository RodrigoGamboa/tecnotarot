var canvas;
var mic;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    //fill(0);
    //ellipse(mouseX, mouseY, 50, 50);
    var level = mic.getLevel();
    ellipse(width/2, height/2, level*width);
}
