class Paper{

constructor(x,y,r){
    var option = {
    restitution:0.3,
    density:1.2
    }
    this.r=r;
    this.imgage=loadImage("paper.png")
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
}

display(){

var pos=this.body.position;
push()
translate(pos.x,pos.y)
imageMode (CENTER)
imageMode(this.image,0,0,this.r)

}


}