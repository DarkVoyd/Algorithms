var movingRect,fixedRect;

function setup() {
  createCanvas(1200,400);
  fixedRect= createSprite(100, 50, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=+2;
  fixedRect.debug= true;

  movingRect = createSprite(800,50,70,70);
  movingRect.shapeColor="green";
  movingRect.velocityX=-2;
  movingRect.debug=true;
}

function draw() {
  background("black"); 

  if( movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

 
  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);

  }
   

  
  drawSprites();
}