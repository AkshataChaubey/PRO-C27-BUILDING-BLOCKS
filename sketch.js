const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;
var poly;
var boxes = [];
var r, g, b;
var circle = [];

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(100, 300, 400, 20, options);
  World.add(world, ground);

  box1 = new Box(200, 100, 20, 20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function colors() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}
function mousePressed() {
  var n = Math.round(random(1, 2));
  switch (n) {
    case 1:
      boxes.push(new Box(mouseX, mouseY, 20, 20));

      break;
    case 2:
      circle.push(new Circle(mouseX, mouseY, 20, 20));
      break;

    default:
      break;
  }

  colors();
}

function draw() {
  background(51);
  rect(ground.position.x, ground.position.y, 400, 10);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (var i = 0; i < circle.length; i++) {
    circle[i].show();
  }
}
