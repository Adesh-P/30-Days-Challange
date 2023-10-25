// Type of operator

// Data Types (primitive data types)
// 1.string  "Adesh"
// 2.number  1,2,3.3
// 3.booleans  true false
// 4.undefined
// 5.null
// 6.BigInt
// 7.object
// 8.symbol

// typeof operator - it is used to find data type of given value

let age = 22; // number

let firstName = "John"; //string

console.log(typeof age);
console.log(typeof firstName);

// convert number to string
// 1. add empty string with nuber

age = age + ""

console.log(typeof age); //string

// Convert string to number

let age1 = "34"; 

console.log(typeof age1);

age1 = +"34"; // add + before string to convert in number

console.log(typeof age1);

// other methods
// 1.numer to string
let age2 = 22;

age2 = String(age2);

console.log(typeof age2);

// 2.string to number
let age3 = "22";

age3 = Number(age3);

console.log(typeof age3);



