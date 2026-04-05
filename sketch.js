//Variables for colors
let c = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]//this allows me to have the background color change randomly but not rapid fire.

//these are colors for shapes
let c2 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]
let c3 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]
let c4 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]

//location variables
let x = 0
let y = 0
let xR = 0;
let yR = 0;

//variables for sizing
let size1 = 1;
let size2 = 2;
let size3 = 3;

function setup() {
    createCanvas(800, 800);
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

    // circle set #1  from the left quad
    fill(c2)
    noStroke()
    circle(x, y, size2)
    fill(c3)
    circle(x, y, size1)
    fill(c4)
    circle(x, y, size3)

    //circle set #12 the bottom right quad
    fill(c2)
    circle(xR,yR,size2)
    fill(c3)
    circle(xR,yR,size1)
    fill(c4)
    circle(xR, yR, size3)
    

                            //animation settings
    //circle's location settings
    y = y += 1;
    x = x += 1;
    xR = xR -= 1;
    yR = yR -+ 1;
                            //looping settings
                     
    if(y > height || x > width || yR == 0|| xR == 0){
        y = 0;
        x = 0;
        size1 = 1;
        size2 = 2;
        size3 = 3;
        yR = height;
        xR = width;
    }

    //sizing settings
    size1 = size1 += .2;
    size2 = size2 += .4;
    size3 = size3 += .08;

   
}
