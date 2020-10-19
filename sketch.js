


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;



function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    for(var i = 0 ; i < maxDrops ; i++){
drop = new Drops (0,0,14,14);       
       
        }



umbrella = new Umbrella(400,280,6,6);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

for(var j = 0 ; j < 400 ; j = j++){
drop.display();
}


umbrella.display();
  drawSprites();
 
}  

