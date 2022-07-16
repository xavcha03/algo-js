/**
 * Return the disance between 2 points ([x,y])
 * @param {Array} A 
 * @param {Array} B 
 * @return distance
 */
function calcDistance(A, B){
return Math.round(Math.sqrt(Math.pow(A[0]-B[0],2)+Math.pow(A[1]-B[1],2))*100)/100;
}

let A = [4,1];
let B = [1,1];

console.log(calcDistance(A,B));