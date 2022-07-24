var img = "";
var stats = "";
function setup() {
    canvas = createCanvas(640,420);
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded() {
console.log("Cocossd is loaded.");
stats = true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
if(error) {
    console.error(error);
}
{
    console.log(results);   
}
}
function preload() {
    img = loadImage('dog_cat.jpg');
}
function draw() {
    image(img,0,0,640,420);
    noFill();
    stroke("#FF0000");
rect(30,60,450,350);
    text("Dog",45,75);
    noFill();
    text("Cat",320,120);
    stroke("#FF0000");
    rect(300,90,270,320);
}
