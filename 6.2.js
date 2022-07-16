class Rectangle{
    constructor(topLeftXpos, topLeftYPos, width, length){
        this.topLeftXpos = topLeftXpos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
        if(
            this.topLeftXpos < otherRectangle.topLeftXpos + otherRectangle.width &&
            this.topLeftXpos + this.width > otherRectangle.topLeftXpos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.length + otherRectangle.topLeftYPos > otherRectangle.topLeftYPos
        ){
            return true;
        }else return false;
    }
} 

let rect1 = new Rectangle(0,10,10,10);
let rect2 = new Rectangle(8,9,10,10);

console.log(rect1.collides(rect2))
