const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform1,platform2,block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11 ,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21 
var block22,block23,block24,block25,hexagonBody,hexagonImage,hexagonSprite,rubberBand
var gameState ="attached",backgroundImg

function preload() {
  
hexagonImage = loadImage("hexagon.png");
getBackgroundImg()

}

function setup() {
  createCanvas(800,400);
  //console.log(mouseX)
  engine = Engine.create();
	world = engine.world;

  hexagonSprite=createSprite(width/2, 80, 10,10);
	hexagonSprite.addImage(hexagonImage)
	hexagonSprite.scale=0.2

   platform1 = new Ground(300,300,250,10);
   platform2 = new Ground(600,200,250,10);
   block1 = new Box(320,290,30,40);
   block2 = new Box(320,290,30,40);
   block3 = new Box(320,290,30,40);
   block4 = new Box(320,290,30,40);
   block5 = new Box(320,290,30,40);
   block6 = new Box(320,290,30,40);
   block7 = new Box(320,290,30,40);
   block8 = new Box(320,250,30,40);
   block9 = new Box(310,250,30,40);
   block10 = new Box(310,250,30,40);
   block11 = new Box(320,250,30,40);
   block12 = new Box(320,250,30,40);
   block13 = new Box(340,200,30,40);
   block14 = new Box(310,200,30,40);
   block15 = new Box(280,200,30,40);
   block16 = new Box(310,150,30,40);
   block17 = new Box(600,190,30,40);
   block18 = new Box(610,190,30,40);
   block19 = new Box(620,190,30,40);
   block20 = new Box(630,190,30,40);
   block21 = new Box(640,190,30,40);
   block22 = new Box(640,150,30,40);
   block23 = new Box(610,150,30,40);
   block24 = new Box(600,150,30,40);
   block25 = new Box(610,100,30,40);

   
   hexagonBody = Bodies.rectangle(200,200 , 30 , 30 , { density:3.5 ,isStatic:false});
   World.add(world,hexagonBody)
    
   rubberBand = new SlingShot(hexagonBody,{x:100,y:100});
   

   Engine.run(engine);
}

function draw() {
  background("backgroundImg"); 

  
  hexagonSprite.x = hexagonBody.position.x
  hexagonSprite.y = hexagonBody.position.y
  platform1.display();
  platform2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  rubberBand.display();
  drawSprites();

}

function mouseDragged(){
  if (gameState!="launched")
    {
      Matter.Body.setPosition(hexagonBody, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    rubberBand.Fly();
}

function keyPressed()
{
 if(keyCode === 32)
 {
  rubberBand.attach(hexagonBody);
 }
}
 async function getBackgroundImg()
 {
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 
 var responseJSON = await response.json();
 
 var datetime = responseJSON.datetime;
 
 var hour = datetime.slice(11,13);
 console.log(hour);
 
 
 if(hour>=06 && hour<=18 )
 {
 bg = "bg.jpg";
 
 }
 else
 {
 
     bg = "bg2.jpg";
 }
 
 backgroundImg= loadImage(bg);
 }






