// booleans and comparision operator
// booleans having two values True and False
 
let num1 = 10;
let num2 = 12;

console.log(num1>=num2); //false

// == vs ===

//1. ==   its check only value not data type
let num3 = 10;
let num4 = 10;

console.log(num3 == num4); //true

let num5 = "10";
let num6 = 10;

console.log(num5 == num6); //true

//2. ===  its check data type

let num7 = 10;
let num8 = 10;

console.log(num7 === num8); //true

let num9 = "10";
let num10 = 10;

console.log(num9 === num10); //false

// != vs !==

//1. !=
console.log(num1!=num2); //true
console.log(num3!=num4); //false
console.log(num5!=num6); //false

//2. !==
console.log(num1!==num2); //true
console.log(num3!==num4); //false
console.log(num5!==num6); //true