var bg, bgimg;
var astro, move, gym, eat, bath, brush;

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200);
 

}

function preload() {
bgimg = loadImage("iss.png");
move = loadAnimation("images/move.png", "move1.png");
gym = loadAnimation("images/gym11.png", "images/gym12.png");
eat = loadAnimation("images/eat1.png", "images/eat2.png");
bath = loadAnimation("images/bath1.png", "images/bath2.png");
brush = loadImage("images/brush.png");
}

function draw() {
  background(255,255,255);

  bg.addImage(bgimg);
  bg.scale = 0.165;
  astro = createSprite(400, 200);
  astro.scale = 0.1;
  astro.addAnimation("moving", move);
  astro.changeAnimation("moving");
  

  if(keyDown("m")){

    astro.changeAnimation("moving");
    astro.velocityX = 2;
    astro.velocityY = 3;
  }

 if(keyDown("up")){
    astro.addImage("brush");
    astro.changeImage("brush");
  }

  if(keyDown("down")){
    astro.addAnimation("gymming", gym);
    astro.changeAnimation("gymming");
  }
  if(keyDown("left")){
    astro.addAnimation("bathing", bath);
    astro.changeAnimation("bathing");
  }

  if(keyDown("right")){
    astro.addAnimation("eating", eat);
    astro.changeAnimation("eating");
  }
  


  drawSprites();
}