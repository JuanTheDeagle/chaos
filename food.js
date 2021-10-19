class Food{
   constructor(x,y,r) {
       this.x = x
       this,y = y
       this.r = r
       this.body = Bodies.circle(this.x,this.y,this.r)
       World.add(world,this.body)
   }
   show(){
       ellipseMode(RADIUS)
       ellipse(this.body.position.x, this.body.position.y, 30,30)
   }
}