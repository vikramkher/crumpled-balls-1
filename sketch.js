
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbinpart1,dustbinpart2,dustbinpart3,ground1


function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(600,390,1200,20)
	paper1=new Paper(200,350,50/2)



  
}


function draw() {
  background(0);
  Engine.run(engine);
  
    
  ground1.display();
  paper1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:25,y:-25})
	}
}



