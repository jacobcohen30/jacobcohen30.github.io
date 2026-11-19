const sun={x:50, y:50, d:50,paint1:"orange",paint2:"yellow"}
const blueStar={x:150,y:100,d:100,paint1:"blue",paint2:"lightblue"}
const redGiant={x:300,y:200,d:150,paint1:"red",paint2:"orange"}
/*const blueSpot={x:170,y:90,w:20,h:10,paint:"blue"}
const sunSpot={x:40,y:70,w:10,h:8,paint:"orange"}
const redSpot={x:330,y:150,w:20,h:15,paint:"red"}*/

function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
}

function drawStar(star){
  fill(star.paint1)
  circle(star.x,star.y,star.d+8)
  noStroke()
  fill(star.paint2)
  circle(star.x,star.y,star.d)
}
function drawSpot(star){
  fill(star.paint1)
 ellipse(star.x+random(10,12),star.y+random(18,20),star.d/8,star.d/10)
}
/*function starSpot(spot){
  fill(spot.paint)
  ellipse(spot.x,spot.y,spot.w,spot.h)
}*/
function draw() {
  background(20);
  drawStar(sun)
  drawSpot(sun)
  drawStar(blueStar)
   drawSpot(blueStar)
  drawStar(redGiant)
  drawSpot(redGiant)
  /*starSpot(blueSpot)
  starSpot(sunSpot)
  starSpot(redSpot)*/
}