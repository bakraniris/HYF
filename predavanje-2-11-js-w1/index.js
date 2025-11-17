console.log("Hello HYF!");

//String
const myString = "a string";
const myOtherString = "a string";
const myOtherOtherString = `a string`;

//Number
const myNumber = 1;
const myOtherNumber = 1.5;
const myBigNumber = 9007199254740991;

//Boolean
const yes = true;
const no = false;

//Object
const myObject = {
  a: 123,
  b: "a string",
};
console.log(myObject.a);

//Array
const myArray = ["a", "b", "c"];
const myOtherArray = new Array(); //rare
console.log(myArray[0]); //a
console.log(myArray[1]); //b
console.log(myArray[2]); //c
console.log(myArray[500]); //undefined
console.log(myArray.length); //3

// Comments in JS
/* this is a multiline comment
   that spans multiple lines 
*/

console.log(typeof 3);

//Null
const myNull = null;

//Undefined
let myUndefined;


//Function
function myFunction() {
  return "Hello from myFunction";
}

console.log(myFunction());

// exercise1 

var varMultiply = 24 * 55;
console.log(varMultiply);

const myName = "Iris";

console.log(myName [0]);

const threeArrays = ["a", "b", "c", 1, 2, 3, 1==1, false, true];
console.log(threeArrays [3]);

let lastLetter = myName[myName.length - 1];
console.log(lastLetter);


// exercise2

let name2 = "benjamin";
name2 = "benjamin-better";

const pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaPrice - 10;
console.log(pizzaPriceDiscounted);

const users = ["peter", "Johnny", "Børge"];

const lastUser = users[users.length - 1];
console.log(lastUser);