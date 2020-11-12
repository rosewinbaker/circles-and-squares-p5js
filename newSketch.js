// These will be used to determine random color values; x, y axis; and shape radius
let c1, c2;
let x, y;
let rad;

// Specify the maximum number of circles or squares
let numShapesCap = 15;

// Specify the largest the shapes can be
let numSizeCap = 200;

// Set up our canvas
function setup() {
  noLoop();
  noStroke();
  createCanvas(windowWidth * 0.75, windowHeight * 0.75);

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight, [noRedraw]);
  };

  // Generate random x, y values and random radius based on numSizeCap limit
  x = random(width);
  y = random(height);
  rad = random(1, numSizeCap);
  ellipseMode(RADIUS);

  // Generate random color values for our gradient background
  c1 = color(random(255),random(255),random(255));
  c2 = color(random(255),random(255),random(255));
  setGradient(c1, c2);
};

// Set the background color gradient
function setGradient(c1, c2) {
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  };
};

// Loop through more random x,y values for more shapes
function loopAxis() {
    x = random(width);
    y = random(height);
    rad = random(1, numSizeCap);
};

// Make some circles with random colors at random x, y axis points
function loopCircles() {
    for (let i = 0; i < floor(random(1,numShapesCap)); i++) {
        noStroke();
        loopAxis();
        let randomColor = color(random(255),random(255),random(255));
        fill(randomColor);
        ellipse(x, y, rad, rad);
        console.log("circle number " + [i]);
    };
};

// Make some squares with random colors at random x, y axis points
function loopSquares() {
    for (let i = 0; i < floor(random(1,numShapesCap)); i++) {
        noStroke();
        loopAxis();
        let randomColor = color(random(255),random(255),random(255));
        fill(randomColor);
        square(x, y, floor(random(1,(numSizeCap/2))));
        console.log("square number " + [i]);
    };
};

// Do all of the things again when the "Generate New" button is clicked
function generateNew() {
    background("#fff");
    noStroke();
    c1 = color(random(255),random(255),random(255));
    c2 = color(random(255),random(255),random(255));
    setGradient(c1,c2);
    loopCircles();
    loopSquares();
  };

// Download the canvas when "Download" button is clicked
function downloadCanvas() {
    saveCanvas('lookhowlovely', 'png');
};

// Make all the original circles and squares
function draw() {
    noStroke();
    loopCircles();
    loopSquares();
};