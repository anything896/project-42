const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var cir;
hr = hour();
mn = minutr();
sc = second();
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  cir=new Circle(400,200,100);
  hourhand=new Hand(400,200,200,20,hr)
  minuthand=new Hand(400,200,150,20,mn)
  secondhand=new Hand(400,200,100,20,sc)

}

function draw() {
  createCanvas(1200,400);
  background(255,255,255);  
  Engine.update(engine);
    cir.display
  
  drawSprites();
}