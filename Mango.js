class Mango{
    constructor(x,y,width,height){
        var options={
        isStatic:true,
        restitution:0,
        friction:1
     }
    }
     display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

      }
      
}