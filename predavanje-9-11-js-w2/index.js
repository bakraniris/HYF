const weather = "rainy";
const temperature = "negative";

if (weather === "rainy" || weather === "snowy") {
    // take umbrella

} else if (weather === "icy" && temperature === "negative") {
    // stay home
}
else if (weather === "sunny") {
    // take sunglasses
}
 else {
    // go as normal
}

// || this is OR
// && this is AND

// exercise 1
//3 < x < 6 reference to help

const balance = 15000;

if (balance <= 0) {
    console.log ("Please deposit some money!")
} else if (balance >=0 && balance <= 1000) {
    console.log ("Your balance is looking okay")
} else if (balance >=1000 && balance <= 3000) {
    console.log ("Your balance is looking good")
} else if (balance >=3000 && balance <= 10000) {
    console.log ("Your balance is looking fantastic")
} else if (balance >=10000) {
    console.log ("Your balance is AMAZING!")
}

// function

function calculateVolume(width, height, depth) {
    const volume = width * height * depth;
    return volume;
}

const result = calculateVolume(5, 3, 2);
console.log('Outside', result);

function calculateHousePrice (volume, gardenSize) {
    const price = volume * 2.5 * 1000 + gardenSize * 300;

    return price;
}

function evaluateMoneySpent(cost, housePrice){
    const difference = cost - housePrice;

}

//exercise 2 first part

function getCircleArea(radius){
    const area = Math.PI * Math.pow(radius, 2);
    // radius*radius -> Math.pow(radius, 2) -> radius ** 2
    return area;
}
const result2 = getCircleArea(2);
console.log(result2)

//exercise 2 second part

function celsiusToFahrenheit(celsius){
    const calculate = (celsius*(9/5))+32;

    return calculate;
}

const total = celsiusToFahrenheit(23)
console.log(total)

/**
 * also another way: 
 * 
 * const degree = 23;
 * const total = celsiusToFahrenheit(degree)
 * console.log(degree, "celsius degree is ", total)
*/



//loop

// i += 1 -> i = i + 1 -> i++
// i -= 1 -> i = i - 1 -> i--

for (let i = 0; i<10; i += 1) {
    console.log(i)
}


//exercise 3: loop

for (let j = 74; j<99; j += 1) {
    console.log(j)
}

//exercise 4: loop and function

function loopAndFunction (stringToLog, numberOfTimesToLog) {
    for (let a = 1; a <= numberOfTimesToLog; a++) {
        console.log(stringToLog + a);
    }
}
loopAndFunction("hello", 3)

// if a start with 0 then the index is equal 0 so the loop need only < but if a starts with 1 then the loop needs <= because it compares number OfTimesToLog which is 3 with the start point which is either 0 or 1 

// also a loop needs to have a form, you cannot do calculations in the loop 


// exercise 5: send emails

// let recipient = 'benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com';

// function sendEmailTo(recipient) {
//     const email = recipient.split('|'); 
//     for (let b = 1; b <= 4; b++)

//     console.log("email sent to " + recipient.split('|'));

//     return email;
// }

// sendEmailTo(recipient);

let recipient = 'benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com';

function sendEmailTo(recipient) {
    const emails = recipient.split('|'); 
    for (let b = 0; b < emails.length; b++) {
        console.log("email sent to " + emails[b]);
    }
    return emails;
}

sendEmailTo(recipient);
