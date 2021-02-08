class Dustbin{

    constructor(x,y,width,height){

        var options = {
            'friction':1.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        Matter.Body.setAngle(this.body,angle) 
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        angleMode(RADIANS)
        translate(pos.x,pos.y);
        rotate(angle)
        fill("brown");
        strokeWeight(4)
        stroke("orange")
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
    






}