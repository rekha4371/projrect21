var canvas,bg;
var tomImg1;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2= loadAnimation("images/tomTwo.png");
    tomImg3= loadAnimation("images/tomThree.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

}

function draw() {

    background(bg);

        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");


    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
    }
}