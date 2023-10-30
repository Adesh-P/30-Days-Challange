// Array Destructuring

const names =["John","Vijay","Jay","Ram","Sham"];

// let myName1 = names[0];
// let myName2 = names[1];

// console.log('First name is ',myName1);
// console.log('Second name is ',myName2);

// let[myName1,myName2] = names
let[myName1,,myName2] = names //print first and third value
// let[myName1,,myName2,...newNames] = names   // in new names store all remaining elements

console.log('First name is ',myName1);
console.log('Second name is ',myName2);

// let newNames = names.slice(1);

console.log(newNames);