var horseTrack , horseTrackImg
var horse , horseImg , horseRun
var obstaclesGroup
var rewardsGroup
var score 

function preload(){
  horseTrackImg = loadImage("track.jpg");
 horseImg = loadAnimation("horse.png");
 horseRunning=loadAnimation("horse.png","h.png")
 obstacleImage = loadImage("muddyPuddle.png");
 obstacleImage2 = loadImage("roadCone.png")
 rewardImage = loadImage ("apple.png");
 rewardImage2 = loadImage("hayBale.png");
}

function setup() {
  createCanvas(windowWidth , windowHeight);
  //horseTrack = createSprite(width,height)
  //horseTrack.addImage("track" , horseTrackImg)
  horse = createSprite(150 , height/2)
  horse.addAnimation("horse",horseImg);
  horse.addAnimation("h",horseRunning);
  horse.scale = 1
obstaclesGroup = new Group()
rewardsGroup = new Group()
 score = 0

}

function draw() {
  background(255,255,255);  
  image(horseTrackImg,0,0,width*6,height)

  textSize(30)
fill ("black")
  text("score : "+score,camera.position.x-200,100)

  if(keyDown("right")){
   horse.changeAnimation("h",horseRunning)
   horse.x+=10

  }

 
  if(keyDown("up")&& horse.position.y>height-500){
    horse.changeAnimation("h",horseRunning)
    horse.y-=5
 
   }

   if(keyDown("down")&& horse.position.y<height/2+90){
    horse.changeAnimation("h",horseRunning)
    horse.y+=5
 
   }
   
if(rewardsGroup.isTouching(horse)){
  rewardsGroup[0].destroy()
 score = score+1
}

  camera.position.x= horse.x+600
  spawnObstacles();
  rewards();
  drawSprites();
}

function spawnObstacles(){
if(frameCount %150 === 0){
var obstacle = createSprite(camera.position.x+400,330,40,40)
obstacle.velocityX = -6
obstacle.y=Math.round(random(height-500,height/2+70))
obstacle.scale = 0.15
var rand = Math.round(random(1,2))
switch(rand){
  case 1:  obstacle.addImage(obstacleImage)
  break
  case 2: obstacle.addImage(obstacleImage2)
  break
}
obstaclesGroup.add(obstacle)
}

}

function rewards(){
  if(frameCount %150 === 0){
    var reward = createSprite(camera.position.x+600,400,40,40)
    reward.velocityX = -6
    reward.y = Math.round(random(height-500,height/2+70))
   reward.scale = 0.2
   var rand = Math.round(random(1,2))
   switch(rand){
    case 1: reward.addImage(rewardImage);
    break
    case 2: reward.addImage(rewardImage2);
    break
  }
  rewardsGroup.add(reward)
}
}
