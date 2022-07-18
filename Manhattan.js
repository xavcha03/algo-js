function manhattan(streetA, avenueA, streetB, avenueB){
     return Math.abs((streetA - streetB) + (avenueA - avenueB))
}

console.log(manhattan(0,0,3,2));