let model;

function preload() {
  model = loadModel('assets/octahedron.obj');
}

function setup() {
	createCanvas(windowWidth, windowHeight,'WebGL');
}

function draw() {
	background(0);
    rotateX(frameCount * 0.01);
    model(model);
}