class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
           bodyA: bodyA,
           bodyB: bodyB,
           pointB:{x:this.offsetX,y:this.offsetY},
           length: 200,
           stiffness:0.04
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var pointA= this.chain.bodyA.position
        var pointB= this.chain.bodyB.position
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}