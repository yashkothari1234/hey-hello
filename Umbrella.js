class Umbrella{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 5,
            density :6
        }
        this.body = Matter.Bodies.circle(x,y,5,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Umbrella.png");
        World.add(world, this.body);
        
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,100,140);     
rectMode(CENTER);
fill(255);
stroke(255);
ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
  }