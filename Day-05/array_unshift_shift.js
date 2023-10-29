// array unshift()
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.

let fruits = ["Apple","Grapes","Mango"];

console.log(fruits);

fruits.unshift("Banana");
fruits.unshift("PineApple");

console.log(fruits);

// Array shift()
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

let names = ["A","B","C","D","E","F"];

console.log(names);

console.log("Removed Name is ",names.shift());

console.log(names);