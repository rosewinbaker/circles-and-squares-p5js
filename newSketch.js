let c1, c2;
let x, y;
let rad;

let numShapesCap = 15;
let numSizeCap = 100;

function setup() {
  noLoop();
  noStroke();
  createCanvas(windowWidth * 0.75, windowHeight * 0.75);

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight, [noRedraw]);
  }

  x = random(width);
  y = random(height);
  rad = random(1, numSizeCap);
  ellipseMode(RADIUS);

  c1 = color(random(255),random(255),random(255));
  c2 = color(random(255),random(255),random(255));
  setGradient(c1, c2);
}

function setGradient(c1, c2) {
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function loopAxis() {
    x = random(width);
    y = random(height);
    rad = random(1, 200);
}

function loopCircles() {
    for (let i = 0; i < floor(random(1,numShapesCap)); i++) {
        noStroke();
        loopAxis();
        let randomColor = color(random(255),random(255),random(255));
        fill(randomColor);
        ellipse(x, y, rad, rad);
        console.log("circle number " + [i]);
    }
}

function loopSquares() {
    for (let i = 0; i < floor(random(1,numShapesCap)); i++) {
        noStroke();
        loopAxis();
        let randomColor = color(random(255),random(255),random(255));
        fill(randomColor);
        square(x, y, floor(random(1,numSizeCap)));
        console.log("square number " + [i]);
    }
};

function generateNew() {
    background("#fff");
    noStroke();
    c1 = color(random(255),random(255),random(255));
    c2 = color(random(255),random(255),random(255));
    setGradient(c1,c2);
    loopCircles();
    loopSquares();
  };

function downloadCanvas() {
    saveCanvas('lookhowlovely', 'png');
}

function draw() {
    noStroke();
    loopCircles();
    loopSquares();
}