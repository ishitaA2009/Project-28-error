class Tree{
    constructor(x, y, width, height){
    //this.image = loadImage("MatterJSBoilerPlate-master / Plucking mangoes / tree.png");
    
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