var path,pathim;
var jake,jakeim;
var boun1,boun2;

function preload(){
  pathim=loadImage("path.png");
  jakeim=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200,10,10);
  path.addImage(pathim);
  path.velocityY=5;
  
  jake=createSprite(200,200,20,20);
  jake.addAnimation("runningjake",jakeim);
  
  boun1=createSprite(0,200,50,400);
boun1.visible=false
   boun2=createSprite(400,200,50,400);
boun2.visible=false
  
}

function draw() {
  background(0);
  
  if(path.y>400){
    path.y=200;
  }
  
  jake.x=World.mouseX;
  
  jake.collide(boun1);
  jake.collide(boun2);
  
drawSprites();
}
