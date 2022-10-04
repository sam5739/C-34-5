
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backImg, back2Img, back2, box;
var boxGroup;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;

function preload(){
  backImg = loadImage("back1.png");
  back2Img = loadImage("back2.jpeg");
  box1 = loadImage("box1.jpeg");
  box2 = loadImage("box2.jpeg");
  box3 = loadImage("box3.jpeg");
  box4 = loadImage("box4.jpeg");
  box5 = loadImage("box5.jpeg");
  box6 = loadImage("box6.jpeg");
  box7 = loadImage("box7.jpeg");
  box8 = loadImage("box8.jpeg");
  box9 = loadImage("box9.jpeg");
}

function setup() {
  createCanvas(1366,621);

  engine = Engine.create();
  world = engine.world;
  
 // boxGroup = new Group();
}


function draw() {
  drawSprites();
  background(backImg);
  Engine.update(engine);
  image(back2Img,320,100,800,450);
  
  boxes();

 
}

function boxes(){

  box = createSprite(320,100,90.50);
  box.lifetime(50);
 // boxGroup.add(box);

  var rand = Math.round(random(0,8));

  if(rand === 0){
    box.addImage("image", box1);
    box.x = 320;
    box.y = 100;
  }else if(rand === 1){
    box.addImage("image", box2);
    box.x = 410;
    box.y = 100;
  }else if(rand === 2){
    box.addImage("image", box3);
    box.x = 500;
    box.y = 100;
  }else if(rand === 3){
    box.addImage("image", box4);
    box.x = 320;
    box.y = 150;
  }else if(rand === 4){
    box.addImage("image", box5);
    box.x = 410;
    box.y = 150;
  }else if(rand === 5){
    box.addImage("image", box6);
    box.x = 500;
    box.y = 150;
  }else if(rand === 6){
    box.addImage("image", box7);
    box.x = 320;
    box.y = 200;
  }else if(rand === 7){
    box.addImage("image", box8);
    box.x = 410;
    box.y = 200;
  }else if(rand === 8){
    box.addImage("image", box9);
    box.x = 500;
    box.y = 200;
  }
}