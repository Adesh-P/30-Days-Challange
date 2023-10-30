// how to clone array

// how to concat two array

let array1 = ["Item1","Item2"];
// let array2 = ["Item1","Item2"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
//Spread operator
// let array2 = [...array1];
// let array2 = array1.slice(0).concat(["Item3","Item4"]);
// let array2 = [].concat(array1,["Item3","Item5"]);
let array3 = ["Item A","Item B"];
let array2 = [...array1,...array3];

array1.push('Item3');

console.log(array1 === array2);
console.log(array1);
console.log(array2);