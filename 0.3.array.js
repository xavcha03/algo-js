let arr = ["Apple", "Pear", "Banana"];

console.log(arr); // ["Apple", "Pear", "Banana"]

arr.push("Cherry");

console.log (arr); // ["Apple", "Pear", "Banana", "Cherry"]

arr.pop();

console.log(arr); // ["Apple", "Pear", "Banana"]

//-----------------

let arr = ["Apple", "Pear", "Banana"];

for (let elem of arr) {
  console.log("Do you want to eat a " + elem + "?");
}