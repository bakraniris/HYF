console.log("I love pizza");

const myFavPizza = "Pizza Roso";
const priceOfMyFavPizza = 150;

console.log(
  "New pizza order: ",
  myFavPizza,
  ".",
  "The price of the pizza is:",
  +priceOfMyFavPizza
);

console.log(
  `New pizza order: ${myFavPizza}. The price of the pizza is: ${priceOfMyFavPizza}`
);

console.log(
  "New pizza order: " +
    myFavPizza +
    ". The price of the pizza is: " +
    priceOfMyFavPizza
);

let pizzaOrderCount = 1;

let familySize = true;

if (familySize) {
  totalPrice = pizzaOrderCount * priceOfMyFavPizza * 2;
} else {
  totalPrice = pizzaOrderCount * priceOfMyFavPizza;
}

console.log(
  `New pizza order: number of pizza: ${pizzaOrderCount}, Family size: ${familySize}, ${myFavPizza}, Total cost for the order is: ${totalPrice}`
);

const amountOfPizza = 5;
let isFamPizza = true;
// kostino rjesenje
// let famPizzaMultiplier = isFamPizza + 1;
// let final = amountOfPizza * pizzaPrice * famPizzaMultiplier;
const price = amountOfPizza * pizzaPrice * 2;

console.log(
  `New pizza order: number of pizza: ${amountOfPizza}, Family size: ${isFamPizza}, ${myFavPizza}, Total cost for the order is: ${price}`
);
