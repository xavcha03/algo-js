let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];

let sum = 0;
for (let elt of arr2) {
  sum += elt;
}
console.log(sum / arr2.length);
