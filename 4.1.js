//
// takes the length and width of a rectangle and returns its surface
// @param {int} length Length of the rectangle
// @param {int} width Width of the rectangle
// @returns {int}   Surface of rectangle
//
function calcSurface(length, width) {
  return length * width;
}

let length, width;

length = prompt("Length : ");
width = prompt("Width : ");

console.log(calcSurface(length, width));
