
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score, ground, survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group();
  obstacleGroup= new Group();
}



function setup() {
 createCanvas(600, 200);
  monkey = createSprite(80,315,20,20);
  monkey = addAnimation("moving", monkey_running);
  monkey = scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.X = ground.width/2;
  console.log(ground.x)
  
  survivalTime = 0;
  
}


function draw() {
  backgroun(green)
  
  if(keyDown("space")&& monkey.y> 350){
    monkey.velocityY = -10;
    monkey
  }

  
}






