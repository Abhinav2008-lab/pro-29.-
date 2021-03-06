class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA =null;
    }
    display(){
        //image(this.sling1,200,20);
       // image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA < 220){
                strokeWeight(7);
                line(pointA.x + 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x - 30, pointB.y );
                image(this.slingShot,pointA.x + 20, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y -3);
                image(this.SlingShot,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
        }
    
}