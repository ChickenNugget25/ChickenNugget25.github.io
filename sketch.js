let model;

function preload() {
  model = loadModel('cube.obj');
}

function setup() {
	createCanvas(windowWidth, windowHeight,'WebGL');
}

function draw() {
	background(0);
  scale(0.05);
  rotateX(frameCount * 0.01);
  model(model);
}