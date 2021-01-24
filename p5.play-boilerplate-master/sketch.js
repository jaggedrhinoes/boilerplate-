const Engine  = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies

var  engine, world
function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  obj1 = Bodies.rectangle(200,400,400,15,{isStatic:true})
  World.add(world,obj1)
  
 obj2 = Bodies.circle(100, 100, 40,{restitution:2})
 World.add(world,obj2)


}


function draw() {
  
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(obj1.position.x,obj1.position.y,400,15)
  ellipseMode(RADIUS)
  ellipse(obj2.position.x,obj2.position.y,40,40)
}