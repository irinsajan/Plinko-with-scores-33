var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = null;
var turn = 0;
var score=0;
var plinkos = [];
var divisions = [];

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle!==null){
     particle.display();

     if (particle.body.position.y>760){
       if(particle.body.position.x<300){
         score = score+500;
       }
       if(particle.body.position.x>300 && particle.body.position.x<600){
        score = score+100;
      }
      if(particle.body.position.x>600 && particle.body.position.x<800){
        score = score+200;
      }

       particle = null;
       if (turn>=5){
         gameState = END;
       }
     }
   }

   if (gameState===END){
     textSize(30);
     text("Game Over",320,400);
   }
}

function mousePressed(){
  if (gameState!==END){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}