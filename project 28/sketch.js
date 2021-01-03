
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy1;
 

function preload()
{
	this.image = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mongo1 = new mongo(400,300,20);
	mongo2 = new mongo(200,100,20);
	mongo3 = new mongo(300,200,20);
	mongo4 = new mongo(100,400,20);
	mongo5 = new mongo(500,500,20);
	mongo6 = new mongo(700,300,20);
	mongo7 = new mongo(200,200,20);
	mongo8 = new mongo(100,100,20);
	mongo9 = new mongo(300,300,20);
	tree1 = new tree(500,300,20);
	stone1 = new stone (300,200,20);
	boy1 = new boy (100,20,20); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mongo1.display();
  mongo2.display();
  mongo3.display();
  mongo4.display();
  mongo5.display();
  mongo6.display();
  mongo7.display();
  mongo1.display();
  mongo8.display();
  mongo9.display();
  tree1.display();
  stone1.display();
  boy1.display();
  
  drawSprites();
 
}



