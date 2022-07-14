let min, max, current;

min = new Number(prompt("Min :"));
max = new Number(prompt("Max :"));

if (min > max) {
  console.log("Vous n'avez rien compris...");
} else {
  current = prompt("Current :");
  if (current > min && current < max) {
    console.log("Current is between min : " + min + " and max " + max);
  }
}
