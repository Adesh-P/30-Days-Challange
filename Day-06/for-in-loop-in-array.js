// For in loop in array

const fruits = ["Apple","Grapes","Banana","Mango"]; 
const fruits2 = [];

for(let index in fruits){
    console.log(fruits[index]);
    fruits2.push(fruits[index]);
}
console.log(fruits2);