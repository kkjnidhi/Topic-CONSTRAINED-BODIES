
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball,c,f,ball2;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
  
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce,hForce);
  ground =new Ground(200,390,400,20);
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  c=Matter.Constraint.create({length:100,stiffness:0.1,pointA:{x:200,y:20},bodyB:ball})
  World.add(world,c)
  ball2 = Bodies.circle(350,250,20,ball_options);
  World.add(world,ball2);
  f=Matter.Constraint.create({length:100,stiffness:0.1,bodyA:ball,bodyB:ball2})
  World.add(world,f)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ground.show();
  
  Engine.update(engine);
  push();
  strokeWeight(5)
  stroke("cyan")
 
  line(c.pointA.x,c.pointA.y,ball.position.x,ball.position.y)
  pop();

  push();
  strokeWeight(5)
  stroke("blue")
 line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
 pop();
 
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function hForce()
{
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.05,y:0});
}
  


