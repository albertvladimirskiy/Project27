const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof
var chain1, chain2, chain3, chain4, chain5;
var bobDiameter = 40

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,400,50)

	bobObject1 = new Bob(200,400,100)
	bobObject2 = new Bob(300,400,100)
	bobObject3 = new Bob(400,400,100)
	bobObject4 = new Bob(500,400,100)
	bobObject5 = new Bob(600,400,100)

	chain1 = new Chain(bobObject1.body,roof.body,-bobDiameter*2,0);
	chain2 = new Chain(bobObject2.body,roof.body,-100,0);
	chain3 = new Chain(bobObject3.body,roof.body,0,0);
	chain4 = new Chain(bobObject4.body,roof.body,100,0);
	chain5 = new Chain(bobObject5.body,roof.body,200,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300,y:-85});
  
	}
}

