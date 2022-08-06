var trex, ground;
var trexImage;
var marks = [80, 90, 95, 90, 79];
var sum = 0;
var avg=0;

for(var i = 0; i< marks.length ; i++)
{
  console.log(marks[i])
  sum = sum + marks[i]
}

console.log("TOTAL : " + sum)
avg=sum/marks.length
console.log("AVERAGE : " + avg)

var edges;

function preload() {}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(50, 180, 20, 40);
  edges = createEdgeSprites();
  ground = createSprite(300, 190, 600, 30);
}

function draw() {
  background(180);

  if (keyDown("space") && trex.y>150) {
    trex.velocityY = -10;
  }

  trex.velocityY += 0.5;

  //trex.collide(edges[3])
  trex.collide(ground);

   ground.velocityX=-3

  if (ground.x < 0) {
    ground.x = 300;
  }
  //console.log(ground.x)

  drawSprites();
}
