//Variables for colors
let c = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]//this allows me to have the background color change randomly but not rapid fire.

//these are colors for shapes
let c2 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]
let c3 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]
let c4 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]

//location variables
let xL = 0
let speedxL = 1;
let yL = 0
let speedyL = 1;
let xR = 0;
let speedxR = 1;
let yR = 0;
let speedyR = 1;

//variables for sizing
let size1 = 1;
let size2 = 2;
let size3 = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30)
    xR = width
    yR = height
}

function draw() {
    //canvas set up
    background(c)
    stroke('white')
    strokeWeight(5) 
    line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);


   
//checkered pattern in lower left quadrant
/* stroke('white')
strokeWeight(4)
for (x = 0; x < 16; x++) {
    if (x % 2 === 0) {
        for (y = 0; y < 8; y++) {
            fill(c3)
            square(x * 25, y * 50 + (height / 2)+25, 25);
}
    }else {
        for(y = 0; y < 8; y++){
            fill(c2)
        square(x * 25, y * 50 + height / 2, 25);
     }
    }
} */
//creates cricles in upper right quadrant
/* noStroke()
for (let x = 1; x < 16; x++) {
    if (x % 2 === 0) {
        for (let y = 0; y < 16; y++) {
            fill(c2)
            circle(x * 30 + width / 2.1, y * 25 + 10, 15);
    }

}else {
    for (let y = 0; y < 16; y++) { 
        fill(c3)
        circle(x * 30 + width / 2.1, y * 25, 10);
    }
    }
} */
    
 // circle set #1  from the left quad
  fill(c2);
  noStroke();
  circle(xL, yL, size2);
  fill(c3);
  circle(xL, yL, size1);
  fill(c4);
  circle(xL, yL, size3);

  //circle set #12 the bottom right quad
  fill(c2);
  circle(xR, yR, size2);
  fill(c3);
  circle(xR, yR, size1);
  fill(c4);
  circle(xR, yR, size3);

  //animation settings
  //circle's location and speed settings
  xL += speedxL;
  yL += speedyL;
  xR -= speedxR;
  yR -= speedyR;

  //sizing settings
  size1 = size1 += 0.2;
  size2 = size2 += 0.4;
  size3 = size3 += 0.08;

  //looping settings
  if (xL > width || yL > height) {
    //resets the position
    speedxL = speedxL * -1;
    speedyL = speedyL * -1;
    speedxR = speedxR * -1;
    speedyR = speedyR * -1;

    //reset the size
    size1 = 1;
    size2 = 2;
    size3 = 3;
  }
}
