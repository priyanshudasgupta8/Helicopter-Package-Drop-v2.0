var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var zone1,zone2,zone3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//Creates RED_ZONE by calling the class
	zone1 = new Zone(400,650,200,20);
	zone2 = new Zone(290,610,20,100);
	zone3 = new Zone(510,610,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  helicopterSprite.velocityX = 0;

  if (helicopterSprite.x > width) {
	helicopterSprite.x = 0;
  }

  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;



  if(keyPressed()) {
	Body.isStatic = false;
  }

  zone1.display();
  zone2.display();
  zone3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
}



