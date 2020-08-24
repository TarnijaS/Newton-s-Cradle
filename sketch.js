
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var Bob1, Bob2, Bob3, Bob4, Bob5, Bob6;
var rope1, rope2, rope3, rope4, rope5, rope6;
var Roof;

var bobDiameter = 50;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 900);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Bob1 = new bob(250,300,50);
	//Bob1.shapeColor = "pink";
	Bob2 = new bob(300,300,50);
	//Bob2.shapeColor = "pink";
	Bob3 = new bob(350,300,50);
	//Bob3.shapeColor = "pink";
	Bob4 = new bob(400,300,50);
	//Bob4.shapeColor = "pink";
	Bob5 = new bob(450,300,50);
	//Bob5.shapeColor = "pink";
	Bob6 = new bob(500,300,50);
	//Bob6.shapeColor = "pink";
	
	Roof = new roof(450,100,400,50)
	
   
   rope1=new rope(Bob1.body,Roof.body,-bobDiameter*2, 0);
   rope2=new rope(Bob2.body,Roof.body,-bobDiameter*1, 0);
   rope3=new rope(Bob3.body,Roof.body,-bobDiameter*0, 0);
   rope4=new rope(Bob4.body,Roof.body,bobDiameter*1, 0);
   rope5=new rope(Bob5.body,Roof.body,bobDiameter*2, 0);
   rope6=new rope(Bob6.body,Roof.body,bobDiameter*3, 0);
   
    
   Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background("yellow");

  Engine.update(engine);
  //strokeWeight(4);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Bob6.display(); 

  Roof.display();

  rope1.display();
  rope2.display();
  rope3.display()
  rope4.display()
  rope5.display()
  rope6.display()

 
}

