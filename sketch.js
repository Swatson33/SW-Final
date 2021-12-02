function setup() {
  createCanvas(400, 400);
}


var xPosBall1 = 53;
var yPosBall1 = 35;

var xPosBall2 = 53;
var yPosBall2 = 160;

var xPosBall3 = 53;
var yPosBall3 = 275;


draw = function() {
    background(186, 219, 255);

//sun
fill(255, 242, 156);
ellipse(339, 33, 150, 150);
triangle(235, 30, 238, 66, 184, 56);
triangle(265, 107, 292, 131, 249, 163);
triangle(335, 131, 370, 131, 352, 193);
    
//lower box
fill(105, 94, 94);
rect(7, 314, 68, 44);

//middle box
rect(7, 196, 68, 44);

//higher box
rect(7, 84, 68, 44);
    
//goal
fill(255, 255, 255);
rect(248, 256, 150, 115); //backboard
fill(255, 43, 0);
rect(298, 293, 55, 51); //small square
strokeWeight (3);
fill(255, 255, 255);
ellipse(302, 345, 63, 15); //basket

//person1
fill(255, 255, 255);
ellipse(38, 22, 25, 25); //head
line(38, 36, 38, 63); //body
line(38, 55, 53, 44); //bottom arm
line(38, 50, 51, 35); //top arm
line(38, 66, 32, 77); //left leg
line(38, 66, 40, 77); //right leg

//person2
ellipse(38, 146, 25, 25); //head
line(38, 159, 38, 183); //body
line(38, 176, 54, 169); //bottom arm
line(38, 171, 53, 160); //top arm
line(38, 183, 32, 193); //left leg
line(38, 183, 40, 193); //right leg

//person3
ellipse(38, 263, 25, 25); //head
line(38, 275, 38, 298); //body
line(38, 294, 54, 283); //bottom arm
line(38, 289, 53, 275); //top arm
line(38, 298, 32, 311); //left leg
line(38, 298, 40, 311); //right leg

//Ball1
fill(255, 140, 0);
ellipse(xPosBall1, yPosBall1, 15, 15);

//ball2
fill(255, 140, 0);
ellipse(xPosBall2, yPosBall2, 15, 15);

//ball3
fill(255, 140, 0);
ellipse(xPosBall3, yPosBall3, 15, 15);

xPosBall1+=2;
yPosBall1+=2.5;

xPosBall2+=2;
yPosBall2+=1.5;

xPosBall3+=2;
yPosBall3+=0.5;

}