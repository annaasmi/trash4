
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,600,50);
	bob2 = new Bob(350,600,50);
	bob3 = new Bob(300,600,50);
	bob4 = new Bob(450,600,50);
	bob5 = new Bob(500,600,50);

	roof = new Roof(400,200,300,50);
	
	rope1 = new Chain(bob1.body,roof,bob1.body.radius*2,0);
	rope2 = new Chain(bob2.body,roof,bob2.body.radius*2,0);
	rope3 = new Chain(bob3.body,roof,bob3.body.radius*2,0);
	rope4 = new Chain(bob4.body,roof,bob4.body.radius*2,0);
	rope5 = new Chain(bob5.body,roof,bob5.body.radius*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



