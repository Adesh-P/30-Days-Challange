// For loop in array

let fruits = ["Apple","Grapes","Mango","Banana"];

let fruits2 = [];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i]);
}
console.log(fruits2);