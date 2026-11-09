let racerXs = [30, 30, 30, 30,];
let startY = 50;
let yStep = 60;
let finishX = 560;

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}

function draw() {
  background(240);
  textSize(50)
  line(finishX, 0, finishX, height);
  if(keyIsPressed("=")){
      racerXs.push(30)
      resizeCanvas(600, startY + yStep * racerXs.length)
    }
    if(keyIsPressed("-")){
      racerXs.pop()
      resizeCanvas(600, startY + yStep * racerXs.length)
    }
  for (let i = 0; i < racerXs.length; i++) {
    
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }
    
   /* if(keyIsDown("1")&&racerXs[0]<finishX){
      racerXs[0]+=0.2
    }
    if(keyIsDown("2")&&racerXs[1]<finishX){
      racerXs[1]+=0.2
    }
    if(keyIsDown("3")&&racerXs[2]<finishX){
      racerXs[2]+=0.2
    }
    if(keyIsDown("4")&&racerXs[3]<finishX){
      racerXs[3]+=0.2
    }
    
    if(racerXs[i]>=finishX){
      racerXs=racerXs
    }
   if(racerXs[0]>=finishX){
      text("Racer 1 wins!",150,100)
  racerXs[1]=0
  racerXs[2]=0
  racerXs[3]=0
    }
    if(racerXs[1]>=finishX){
      text("Racer 2 wins!",150,100)
      racerXs[0]=0
  racerXs[2]=0
  racerXs[3]=0
    }
    if(racerXs[2]>=finishX){
      text("Racer 3 wins!",150,100)
      racerXs[1]=0
  racerXs[0]=0
  racerXs[3]=0
    }
    if(racerXs[3]>=finishX){
      text("Racer 4 wins!",150,100)
      racerXs[1]=0
  racerXs[2]=0
  racerXs[0]=0
    }*/
if(mouseButton.left){
  racerXs=[30,30,30,30]
}
    circle(racerXs[i], y, 24);
  }
}