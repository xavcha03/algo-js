let favNumber;

do {
  favNumber = new Number(prompt("Enter your favorite number :"));
  if (favNumber != 42) console.log("Are you sure ?");
} while (favNumber != 42);
