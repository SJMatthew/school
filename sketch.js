function setup() {
  createCanvas(500, 500);
  
background(220, 215, 255);
  
  
}

function draw() {
 let c = color(251, 231, 185);
  let b = color(204, 77, 81);
  let a = color(207,207,206)
  fill(c)
  ellipse(198, 420, 25)
    ellipse(302, 420, 25)

 fill(172, 64, 52)
  arc(250, 271, 100, 55,  PI,0 , OPEN); 
  fill(b);
  quad (185, 270, 315, 270, 317, 420, 183, 420)
  quad(185, 270, 315, 270, 291, 400, 209, 400) ;
  arc(250, 271, 130, -20,  PI,0 , OPEN);
  
  fill(c);
  triangle (250, 200, 230,270, 270, 270);
 ellipse(250, 180, 125,110);  
 
  arc(250, 269, 40, 30, 0, PI , OPEN);
 arc(250, 180, 125, 125, 0, PI , OPEN); 
  fill(241, 229, 203)
 arc(250, 175, 125, 100, PI, 0 , OPEN);
  
  fill(a);
  rect(210, 400, 80, 115)
  fill (255, 139, 140)
  triangle(250, 200, 255, 208, 245, 208)
  fill(150,150,146)
  triangle (250, 450, 254, 501, 246, 501)
  fill(220, 215, 255)
  triangle (250, 455, 252, 511, 248, 511)
  
  fill(172, 64, 52)
  quad(225, 360, 275, 360, 285, 390, 215, 390)
}