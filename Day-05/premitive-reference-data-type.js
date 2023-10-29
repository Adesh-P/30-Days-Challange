// Primitive vs reference data type

// primitive Type

let num1 = 5;
let num2 = num1;

console.log("Value of num1 is ", num1);
console.log("Value of num2 is ",num2);

num1++;

console.log("After increamenting num1")
console.log("Value of num1 is ", num1);
console.log("Value of num2 is ",num2);

// Reference Type
// array

let array1 = ["John","Doe"];
let array2 = array1;
 
console.log("array1 ",array1);
console.log("array2 ",array2);

array1.push("Schidan");

console.log("After pushing element in array1");
console.log("array1 ",array1);
console.log("array2 ",array2);