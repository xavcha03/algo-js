class Circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface(){
        return this.radius * this.radius * Math.PI;
    }
}

circle1 = new Circle(10,20,20);
