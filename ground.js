class Ground{

constructor(x,y,width,height){

    var options ={
        isStatic: true

    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
}
display(){
    var who =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(who.x,who.y, this.width, this.height);



}

}