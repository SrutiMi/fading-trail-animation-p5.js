function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
}

function draw() {
  background(0,10);//this 10 makes the previous background partly visible during transition
  const c=color(255, 192, 203)
  fill(c);
  stroke(225,0,0);
  ellipse(mouseX,mouseY,20);
  
}