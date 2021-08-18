var ball;
var blower;
var blowermouth;
var btn;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball = new Ball(420,620,100,100);
  blower = new Blower(420,620,100,100);
  blowermouth = new BlowerMouth (420,620,100,100);

  btn = createButton ("Click to Blow");
  btn.position(width / 2 , height - 100 );
  btn.class("blowButton");
  btn.mouseClicked(blow);

}

function draw() {
  background(255,255,255);  

ball.show()
blower.show()
blowermouth.show()

  drawSprites();
}

function blow(){
Matter.Body.applyForce(ball.body, { x :0 , y : 0} , { x : 0, y : 0.05}) 
}