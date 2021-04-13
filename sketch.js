//var background
var backimage;
var cat;
var cat1;
var cat2;
var cat3;
var mouse;
var mouse1;
var mouse2;
var mouse3;
function preload() {
    //load the images here
    backimage=loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png")
    mouse1 = loadAnimation("images/mouse4.png");
    mouse2 = loadAnimation("images/mouse3.png");
    mouse3 = loadAnimation("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,500,200,200);
    cat.addAnimation("catrest",cat1);
    cat.scale=0.1
    mouse = createSprite(70,500,200,200);
    mouse.addAnimation("mouserest",mouse1);
    mouse.scale=0.1

}

function draw() {

    background(backimage);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("Left_Arrow")){
        cat.addAnimation("catrest",cat2);
        cat.velocityX = -3
        mouse.addAnimation("mouserest",mouse2);
    }
    if(cat.x-mouse.x<100){
        cat.addAnimation("catrest",cat3);
        cat.velocityX = 0;
        mouse.addAnimation("mouserest",mouse3);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  

}
