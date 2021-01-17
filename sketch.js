const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;

function setup() {
  var canvas= createCanvas(500,750);
  engine = Engine.create();
  world = engine.world;

  


  ground1 = new Ground(250,720,500,10)
  ground2 = new Ground(5,375,10,700)
  ground3 = new Ground(497,375,10,700)


  for(var j=27; j<=width; j=j+50){
    plinkos.push(new plinko(j,75));
  }

  for(var j = 0; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,175))
  }

  for(var j=27; j<=width; j=j+50){
    plinkos.push(new plinko(j,275));
  }

  for(var j = 0; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,375))
  }



  for (var i = 5; i<=width; i=i+82){
    divisions.push(new division(i, height=divisionHeight*1.9, 10, divisionHeight))
  }

}

function draw() {
  background("lightskyblue");
  Engine.update(engine);

  noStroke()
  fill("white")
  ground1.display();
  ground2.display();
  ground3.display();

  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }

  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }


  for (var i=0; i<divisions.length; i++){
    divisions[i].display();
  }


  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-5, width/2+10), 10, 10))
  }


  drawSprites();
}