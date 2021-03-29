const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree,stone,ground,boy,chain;
var mango1,mango2,mango3,mango4,mango5;

function preload(){

 //tree = loadImage("MatterJSBoilerPlate-master / Plucking mangoes / tree.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree = new Tree(710,300,100,400);
   tree.shapeColor="brown";

   stone = new Stone(270,480,40,40);
   stone.shapeColor="blue";

   boy = new Boy(200,490,60,170)
   boy.shapeColor="red";

   ground = new Ground(400,590,800,30);
   ground.shapeColor="green";

   mango1 = createSprite(700,150,20,20);
   mango1.shapeColor="yellow";

   mango2 = createSprite(650,150,20,20);
   mango2.shapeColor="yellow";

   mango3 = createSprite(750,150,20,20);
   mango3.shapeColor="yellow";

   mango4 = createSprite(680,120,20,20);
   mango4.shapeColor="yellow";

   mango5 = createSprite(730,120,20,20);
   mango5.shapeColor="yellow";

   chain = new Chain(stone.body,{x:100,y:200});

	Engine.run(engine);
  
}

function draw(){
    rectMode(CENTER);
    background("pink");
    strokeWeight(4);

    chain.display(); 
    stone.display();
    tree.display();
    ground.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();

    detectollision(stone,mango1);
    detectollision(stone,mango2);
    detectollision(stone,mango3);
    detectollision(stone,mango4);
    detectollision(stone,mango5);


    drawSprites();
}

function detectollision(stone,mango){
var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y)
   if(distance<=mango+stone){
       matter.Body.setStatic(mango.body,false);
   }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){

    if(keyCode === 32){
        matter.body.setPosition(stone.body,{x:235,y:420})
    }
}
