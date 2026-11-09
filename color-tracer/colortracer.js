let x=20
let y=20
let d=15
let dx=3
let dy=2
let r=15
let g=13
let b=200
let colorChange=true

function setup() {
  createCanvas(505, 402);
}

function draw() {
  noStroke()
  fill(r,g,b)
  circle(x,y,d)
  x+=dx
  y+=dy
  if(colorChange==true){
   r=random(r,r+3)
   g=random(g,g+3)
   b=random(b,b+3)
  }
  if(colorChange==false){
     r=random(r-3,r)
   g=random(g-3,g)
   b=random(b-3,b)
  }
  if(x+d>=width){
    dx=-dx
    colorChange=false
  }
  if(x-d<=0){
    dx=-dx
    colorChange=true
  }
  if(y+d>=height){
    dy=-dy
    colorChange=false
  }
  if(y-d<=0){
    dy=-dy
    colorChange=true
  }
}
