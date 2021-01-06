

var f,m,o1,o2;

function setup() {
  createCanvas(800,400);
  
  m=createSprite(300,150,80,40);
  f=createSprite(200,200,50,30);
  o1=createSprite(300,250,50,50);
  o2=createSprite(250,300,30,80);
  m.shapeColor="green";
  f.shapeColor="blue";
  o1.shapeColor="pink";
  o2.shapeColor="black";
}

function draw() {
background("yellow");
m.x=mouseX;
m.y=mouseY;

console.log(m.y-f.y)


drawSprites();

if(isTouching(m,o1)){

  m.shapeColor="red";
  o1.shapeColor="red";
}

else{
  m.shapeColor="green";
  o1.shapeColor="green";

}
}

function isTouching(p1,p2){
  if(p1.x-p2.x <p1.width/2+p2.width/2 &&
    p2.x-p1.x<p1.width/2+p2.width/2 && 
    p1.y-p2.y<p1.height/2+p2.height/2 && 
    p2.y-p1.y<p1.height/2+p2.height/2  ){
      
   return true;
 }
 
 else{
   
  return false;
 
 }

}