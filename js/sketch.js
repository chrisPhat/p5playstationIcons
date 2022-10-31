function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
}

function draw() {
    background('#d9d9d9');

    noStroke();

    //Button Backgrounds
    fill('#383838');
    ellipse(150, 150, 250);
    ellipse(150, 450, 250);
    ellipse(450, 150, 250);
    ellipse(450, 450, 250);

    noFill();
    strokeWeight(20);

    //Triangle
    stroke('#38DE9C')
    triangle(150, 80, 220, 200, 80, 200);

    //Sqaure
    stroke('#DF9ACA');
    rect(385, 85, 130);

    //Cross
    stroke('#6BBAC8');
    strokeCap(SQUARE);
    line(95, 385, 210, 515);
    line(95, 515, 210, 385);

    //Circle
    stroke('#f52c31');
    ellipse(450, 450, 180);

    
}