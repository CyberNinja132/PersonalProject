var bean,beanImg;
var bullet;
var gun, gunImg;


var beanX = 100;
var beanY = 326;

var movement;

var backGround;
var background;

function preload() {
   beanImg = loadImage("asset/937755.png");
   backGround = loadImage("asset/pixel-green-landscape-fields-road-clouds-173721348.jpg")
   gunImg = loadImage("asset/pngegg.png");

  
  
}

function setup() {
  createCanvas(800,454);
 
  
  console.log("y axis position:  " + beanY);
  console.log("x axis position:  " + beanX);

}

function draw() {
  background(backGround);
  noFill();
  fill(255);

  //player creation
  var bean = rect(beanX,beanY,0.00001,0.00001);

  //player Image settings
  image(beanImg,beanX + 1,beanY/1.09);
  beanImg.width = 50;
  beanImg.height = 100;

  createBullet();

  //gun creation
  var gun = rect(beanX + 26,beanY + 18,0.001,0.001);

  //gun image settings
  image(gunImg,beanX + 29,beanY + 14);
  gunImg.resize(50,31)


 

  movement();
  
 
     
 
  drawSprites();
  


    
}
function movement(){
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
     beanX +=5; 
    }  else if (keyCode == LEFT_ARROW) {
      beanX -= 5;
    } 
    }
   }  

function createBullet(){
  if(keyIsPressed){
  if(keyCode == UP_ARROW){
    bullet = createSprite(beanX + 74,beanY + 19,10,4.5);
   
  }
  }
}
 



