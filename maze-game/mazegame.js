/*USE ARROW KEYS TO MOVE AND TRY TO COLLECT ALL THE COINS WHILE AVOIDING CONTACT WITH WALLS. BE CAREFUL, AS YOUR CHARACTER GROWS WITH EVERY COIN COLLECTED.*/

let characterX = 327.5;
let characterY = 262.5;
let characterSize = 30;
let coinSize = 45;
let collected1 = true;
let collected2 = true;
let collected3 = true;
let collected4 = true
let n = 5;
function drawCoin(x,y,r,g,b){
  fill(r,g,b)
  circle(x,y,coinSize)
  
}
function drawWall(x,y,w,h){
  fill("white")
  rect(x,y,w,h)
}
function setup() {
  createCanvas(635, 635);
  
}

function draw() {
  background(0);
  noStroke();

  //COINS//
drawCoin(37.5,37.5,239,223,46)
  drawCoin(37.5,37.5,239,223,46)
  drawCoin(37.5,597.5,239,223,46)
  drawCoin(597.5,597.5,239,223,46)
  if (characterX <= 60 && characterY <= 60 && collected1) {
    characterSize += 5;
    collected1 = false;
    drawCoin(37.5,37.5,0,0,0)
  }
  if (characterY <= 60 && characterX + characterSize >= 575 && collected2) {
    characterSize += 5;
    collected2 = false;
    drawCoin(37.5,37.5,0,0,0)
  }
  if (characterX <= 60 && characterY + characterSize >= 575 && collected3) {
    characterSize += 5;
    collected3 = false;
  drawCoin(37.5,597.5,0,0,0)

  }

  if (
    characterX + characterSize >= 575 &&
    characterY + characterSize >= 575 &&
    collected4
  ) {
    drawCoin(597.5,597.5,0,0,0)
    characterSize += 5;
    collected4 = false;
  }
  
  

  //WALLS//
 
  drawWall(75, 0, 5, 240);
  drawWall(155, 75, 485, 5);
  drawWall(75, 155, 490, 5);
  drawWall(0, 315, 155, 5);
  drawWall(155, 235, 5, 330);
  drawWall(155, 235, 150, 5);
  drawWall(380, 235, 260, 5);
  drawWall(235, 315, 330, 5);
  drawWall(455, 395, 185, 5);
  drawWall(380, 475, 185, 5);
  drawWall(455, 555, 185, 5);
  drawWall(380, 315, 5, 325);
  drawWall(75, 395, 5, 245);
  drawWall(155, 560, 155, 5);
  drawWall(235, 315, 5, 170);
  drawWall(310, 390, 5, 175);

  //CHARACTER//

  fill("#5795e5");
  rect(characterX, characterY, characterSize, characterSize);
  if (keyIsDown(UP_ARROW)) {
    characterY = characterY - 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    characterY = characterY + 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    characterX = characterX + 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    characterX = characterX - 3;
  }

  //CHARACTER AND COIN RESET//

  if (
    characterX + characterSize >= 635 ||
    characterX <= 0 ||
    characterY + characterSize >= 635 ||
    characterY <= 0 ||
    (characterX <= 80 &&
      characterX + characterSize >= 75 &&
      characterY <= 240 &&
      characterY >= 0) ||
    (characterX + characterSize >= 155 &&
      characterY >= 50 &&
      characterY <= 80) ||
    (characterX+characterSize >= 75 &&
      characterX <= 565 &&
      characterY+characterSize >= 155 &&
      characterY <= 160) ||
    (characterX >= 0 &&
      characterX <= 155 &&
      characterY+characterSize >= 315 &&
      characterY <= 320) ||
    (characterX+characterSize >= 155 &&
      characterX <= 160 &&
      characterY+characterSize >= 235 &&
      characterY <= 565) ||
    (characterX+characterSize >= 155 &&
      characterX <= 305 &&
      characterY+characterSize >= 235 &&
      characterY <= 240) ||
    (characterX+characterSize >= 380 &&
      characterX <= 540 &&
      characterY+characterSize >= 235 &&
      characterY <= 240) ||
    (characterX+characterSize >= 235 &&
      characterX <= 565 &&
      characterY+characterSize >= 315 &&
      characterY <= 320) ||
    (characterX+characterSize >= 455 &&
      characterX <= 640 &&
      characterY+characterSize >= 395 &&
      characterY <= 400) ||
    (characterX+characterSize >= 380 &&
      characterX <= 565 &&
      characterY+characterSize >= 475 &&
      characterY <= 480) ||
    (characterX+characterSize >= 455 &&
      characterX <= 640 &&
      characterY+characterSize >= 555 &&
      characterY <= 560) ||
    (characterX+characterSize >= 380 &&
      characterX <= 385 &&
      characterY+characterSize >= 315 &&
      characterY <= 640) ||
    (characterX+characterSize >= 75 &&
      characterX <= 80 &&
      characterY+characterSize >= 395 &&
      characterY <= 540) ||
    (characterX+characterSize >= 155 &&
      characterX <= 310 &&
      characterY+characterSize >= 560 &&
      characterY <= 565) ||
    (characterX+characterSize >= 235 &&
      characterX <= 240 &&
      characterY+characterSize >= 315 &&
      characterY <= 485) ||
    (characterX+characterSize >= 310 &&
      characterX <= 315 &&
      characterY +characterSize>= 390 &&
      characterY <= 465)
  ) {
    characterX = 327.5;
    characterY = 262.5;
    characterSize = 30;
    drawCoin(37.5,37.5,239,223,46)
  drawCoin(597.5,37.5,239,223,46)
  drawCoin(37.5,597.5,239,223,46)
  drawCoin(597.5,597.5,239,223,46)
    collected1 = true;
    collected2 = true;
    collected3 = true;
    collected4 = true;
  }

  //WINNING SCREEN//

  if (r1 == 0 && r2 == 0 && r3 == 0 && r4 == 0) {
    fill("lightgray");
    rect(0, 0, 635, 635);
    fill("black");
    textSize(50);
    text("You Win!", 200, 300);
    fill(r5, g5, b5);
    for (i = 1; i < n; i++) {
      drawCoin(120 * i, 400, 239,223,46);
    }
  }
}
