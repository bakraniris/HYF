const obj = {
    a: 12,
    b: "ytu",
    c: [1, 2, 3, 4],
    d: {
        dd: "9876"
    }
};

obj.c
obj["c"]

obj.d.dd
obj["d"].dd

obj.c[2]


const fruits = ["banana", "apple", "cherry"];

fruits[1] = "strawberry";

console.log(fruits);

console.log(fruits[fruits.length -1])

//push method adding element on the end of the line 

fruits[fruits.length] = "mango";
console.log(fruits);

fruits.push("papaya");
console.log(fruits);

//adding element at the beginning of the line
function addAtTheBeginningOfTheArray (arr, value) {
    const result = [value]
    for (let i = 0; i < fruits.length; i++) {
        result.push(arr[i])
    }
    return result;
}

console.log(addAtTheBeginningOfTheArray(fruits, "peach"));

// unshift method adding elements on the beginning of the list

function addingAtTheBeginningFromTheLine(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i]
    } 
    arr[0] = value;
}

addingAtTheBeginningFromTheLine(fruits, "mango")
console.log(fruits);

fruits.unshift("papaya");
console.log(fruits);

// some function for practice 

function addTwo(value) {
    return value + 2;
}
let number = 3;
console.log(number);
number = addTwo(number);
console.log(number);


// pop function remove last element and return it 


function popAndCopy(arr) {
    const result = [];
    if (arr.length <= 1) {
        return [];
    }
    
    for (let i = 0; i < arr.length - 2; i++) {
        result[i] = arr[i];
    }
    
    return result;
}


fruits.pop();
console.log(fruits);

const removed = fruits.pop();
console.log(fruits, removed);

// shift method removing the first element of the array and returning it 

const removedShift = fruits.shift();
console.log(fruits, removedShift)


// hr-system 

const cvs = [];
const john = {
    firstName: "John",
    lastName: "Doe",
    skills: ["JS", "HTML", "CSS"]
}

const khole = {
    firstName: "Khole",
    lastName: "Doe",
    skills: ["HTML", "CSS"]
}

const ihro = {
    firstName: "Ihro",
    lastName: "Doe",
    skills: ["JS", "CSS"]
}

const kai = {
    firstName: "Kai",
    lastName: "Doe",
    skills: ["JS", "HTML", "CSS"]
}

function candidateApplies(candidate) {
    //Add the candidate to the list of CVs
    cvs.push(candidate)

}

candidateApplies(john);
candidateApplies(kai);

console.log(cvs);

function processFirstCandidate(){
    //Takes the first candidate in the list 
    // Console log their skills
    // Removes the candidate from the list of CVs to process

   const candidate = cvs.shift();
    
    console.log(candidate.skills);


    // additional thing I could do 
    //Takes the first candidate in the list  - doing this 

    const firstCandidate = cvs[0];

    // after that
    // Console log their skills
    console.log(firstCandidate.skills);

    // after that removing them from the list
    cvs.shift();


}

processFirstCandidate();



// another hr task

function referCandidate(candidate) {
  // Adds the candidate at the beginning of the list of CVs
    cvs.unshift(candidate);
    
}


function isCandidateValid(candidate) {
    // Given a candidate, return true if the candidate's skills includes 'JS'
    // Check on the Internet how the function .includes() works.
    const including = candidate.skills.includes("JS");
    if (including === true) {
        return true
    } else {
        return false
    }
    
    
    
}


function isJCandidate(candidate) {
    // [BONUS] Given a candidate, return true if the candidate's firstName starts with 'J'
    
    if (candidate.firstName[0] === "J") {
        return true;
    } else {
        return false
    }
}
referCandidate(john);
console.log("referred candidate: ", cvs);

isCandidateValid(john);
console.log(isCandidateValid(john));

isJCandidate(john);
console.log(isJCandidate(john));

