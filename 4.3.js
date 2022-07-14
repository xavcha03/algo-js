//
//Return a Number between 1 and 10
//
function rand10() {
  return Math.round(Math.random() * 10);
}

//
//returns an array of n numbers between 1 and 10
//
function multiRand(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
  }
  return arr;
}

let n = parseInt(prompt("Enter a number"));

console.log(multiRand(n));
