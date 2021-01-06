

var f,m,o1,o2;
var edges;

function setup() {
  createCanvas(1200,800);
  
  m=createSprite(400,800,80,30);
  f=createSprite(400,100,50,80);
  o1=createSprite(300,250,50,50);
  o2=createSprite(250,300,30,80);
  m.shapeColor="green";
  f.shapeColor="blue";
  o1.shapeColor="pink";
  o2.shapeColor="black";
   f.velocityY=5;
   m.velocityY=-5;

}

function draw() {
background("yellow");
//m.x=mouseX;
//m.y=mouseY;

//console.log(m.y-f.y)
edges=createEdgeSprites();
m.bounceOff(edges);
f.bounceOff(edges);

//bounceoff testing
bounceOff(m,f);

drawSprites();

// colision testing
/*
if(isTouching(m,o1)){

  m.shapeColor="red";
  o1.shapeColor="red";
}

else{
  m.shapeColor="green";
  o1.shapeColor="green";

} */


}
  
