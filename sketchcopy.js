//Variables for colors
let c = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]//this allows me to have the background color change randomly but not rapid fire.

//these are colors for shapes
let c2 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]
let c3 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]
let c4 = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 250)]

//location variables
let x = 0
let y = 0

//variables for sizing
let size1 = 1;
let size2 = 1;

function setup() {
    createCanvas(800, 800);
    frameRate(30)
}

function draw() {
    //canvas set up
    background(c)

    
    stroke('white')

    strokeWeight(5) 
    line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

    //shapes
    fill(c2)
    noStroke()
    circle(x, y, size2)
    fill(c3)
    circle(x, y, size1)
    

                            //animation settings
    //circle's location settings
    y = y += 1;
    x = x += 1;

    if(y > height || x > width){
        y = 0;
        x = 0;
    }

    //sizing settings
    size1 = size1 += .2;
    size2 = size2 += .4;

   
}
