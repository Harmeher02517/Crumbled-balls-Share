var dustbinline1, dustbinline2, dustbinline3, dusbinImg, paper1, paperIMG;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

dustbinline1=new dustbin(490, 610, 20, 100);
dustbinline2=new dustbin(580, 655, 200, 20);
dustbinline3=new dustbin(690, 615, 20, 100);

paper1=new paper(200,450, 20)

ground = Bodies.rectangle(width/2, 650, width, 10 );
	 World.add(world, ground);
	 
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinline1.display();
  dustbinline2.display();
  dustbinline3.display();
  ground.display();
  paper1.display();
  
  drawSprites();
 
}



