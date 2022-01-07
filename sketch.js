var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup=new group ()
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites ()
}
function spawndoor () {
  if (farmeCount %240===0){
    var door= creatSprite (200,-50)
    door.addImage (doorImg)
    door.x=Math.round(random (120,400))
    door.velocityY=1
    
  }
}