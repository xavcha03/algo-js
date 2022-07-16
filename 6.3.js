const NBR_RECTANGLES = 1000;
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

function rand(max){
    return Math.floor(Math.random() * max);
}

let rectanglesArray = [];
//Generation des rectangles
for(let i=0; i<NBR_RECTANGLES; i++){
    rect = new Rectangle(
        rand(100),rand(100), rand(20), rand(20)
    )
    rectanglesArray.push(rect);
}

//Pour chaque rectangle on detecte la collision
//Parcours de chaque rectangles 
for(let i=0; i<rectanglesArray.length;i++){
    //on parcours tous les rectangles à partir ce celui ci
    for(let y=i+1; y+1<rectanglesArray.length;y++){
        let isCol = rectanglesArray[i].collides(rectanglesArray[y]);
        if(isCol){
            console.log("Le rectangle "+i+" est en collision avec le rectangle "+y , rectanglesArray[i], rectanglesArray[y] );
            rectanglesArray.splice(y,1);
        }
    }
}

console.log("Il reste " + rectanglesArray.length + " rectangles");