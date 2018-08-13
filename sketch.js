let data;
let len;

function preload(){
	data = loadJSON("data.json");

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	len = Object.keys(data).length;
	for (var i = 0; i < len; i++){
  console.log(data[i]);
 }
}

function draw() {

}
