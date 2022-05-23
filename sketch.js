//author:
//2nd week tech demo
//instruction to interact - 
//when the mouse move to the left - rotate counterclockwise
// when the mouse move to the right - rotate closewise

//setup is to initiate the whole program
//it only run once//

let gap = 10; 
let cirNum = 40; 
let cirSize = 20;
let angle =0;
let ptNum = 100;
let rectSize = 600;
function setup(){
  createCanvas(windowWidth,windowHeight);
angleMode(degrees);
}

//draw loops forever
function draw() {
   background ('black');
  //a customized shape for mouse
 noCursor();
noStroke()
fill('white')
  circle(mouseX,mouseY,5)

//main graph
  push();
  translate(width/2,height/2);
  rotate(angle);
  angle = angle+map(mouseX,0, width,-0.1,0.1);
  noFill();
  stroke('white')
  strokeWeight(1)
  //for loop
  //where to start,
  //where to end
  //how much it increments each time
for(let i = 0; i < cirNum; i++) {
      arc(0, 0, cirSize + gap * i,cirSize + gap * i,angle*i,360-i,360-angle/2);
}
  pop();
  
  
  
  stroke ('white');
  strokeWeight(1);
  for(let i=0; i<ptNum; i++){
    point(random(width),random(height));
  }
  
  
  //title subtitle
  push();
  translate(width/2,height,-90);
  noStroke();
  textFont('helvetica');
  textSize(15);
  textAlign(CENTER,CENTER);
  text('9 TO 5',0,-200);
  textSize(10);
  text('A WORK EXPERIENCE',0,-180);
  pop();
  
  //border of the album cover
  noFill();
  stroke('white');
  strokeWeight(2)
}