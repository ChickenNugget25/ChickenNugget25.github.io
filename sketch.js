let modelObject;

function preload() {
  modelObject = loadModel('cube.obj');
}

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);
  console.log("here");
}

function draw() {
	background(0);
  scale(5);
  rotateX(frameCount * 0.01);
  model(modelObject);
}