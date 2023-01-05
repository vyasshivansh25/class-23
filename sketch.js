const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body


function setup() {
  createCanvas(400,400);
//create the engine
engine=Engine.create();
  //Add world to the engine
 world= engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world
  ground=Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,100,20);


  
  
}

