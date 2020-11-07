const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;


var particle = [particle];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var turn = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;



var division1;
var score =0;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  division1 = new Ground(width/2,595,width,10);

  for(var i=0;i<=width-25;i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=50; j<=width-25;j=j+50){
    plinkos.push(new Plinko(j,50));
  }

  for(var j=75; j<=width-40;j=j+50){
    plinkos.push(new Plinko(j,100));
  }

  for(var j=50; j<=width-25;j=j+50){
    plinkos.push(new Plinko(j,150));
  }

  for(var j=75; j<=width-40;j=j+50){
    plinkos.push(new Plinko(j,200));
  }

  for(var j=50; j<=width-25;j=j+50){
    plinkos.push(new Plinko(j,250));
  }

  particle = new Particle(1000, 10, 10, 10);
    
    
}
 


function draw() {
  background(0);
  textSize(20)
  fill("white")
  text("500", 20, 350 );
  text("500", 100, 350 );
  text("500", 180, 350 );
  text("400", 260, 350 );
  text("400", 340, 350 );
  text("300", 420, 350 );
  text("300", 500, 350 );
  text("200", 580, 350 );
  text("200", 660, 350 );
  text("100", 740, 350 );
  text("Score : "+score,20,30);
  textSize(60);
  fill(255);

  Engine.update(engine);

  division1.display();
  
  
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
   }

   if(gameState === PLAY){

  for (var j = 0; j < plinkos.length; j++){
   plinkos[j].display();
 }


 if(particle.body.position.y>580){
  if(particle.body.position.x < 250){
    score = score+500;
    particle = new Particle(1000,100,10,10);
    turn = turn+1;
  }
}

if(particle.body.position.y>570){
  if(particle.body.position.x > 250 && particle.body.position.x < 420){
    score = score+400;
    particle = new Particle(1000,100,10,10);
    turn = turn+1;
  }
}

if(particle.body.position.y>580){
  if(particle.body.position.x > 400 && particle.body.position.x < 550){
    score = score+300;
    particle = new Particle(1000,100,10,10);
    turn = turn+1;
  }
}

if(particle.body.position.y>580){
  if(particle.body.position.x > 550 && particle.body.position.x < 700){
    score = score+200;
    particle = new Particle(1000,100,10,10);
    turn = turn+1;
  }
}

if(particle.body.position.y>580){
  if(particle.body.position.x > 700 && particle.body.position.x < 775){
    score = score+100;
    particle = new Particle(1000,100,10,10);
    turn = turn+1;
  }
}

if(turn>=5){
  gameState = END;
}

 }

 else if(gameState === END){
   text("** Game Over **", 200,200);
 }



 particle.display();
   
}

mousePressed();

function mousePressed(){
  particle = new Particle(mouseX, 10, 10, 10);
}



