// For of loop in array

const fruits = ["Apple","Grapes","Banana","Mango"]; 
const fruits2 = [];

for(let fruit of fruits){
    console.log(fruit);
    fruits2.push(fruit);
}
console.log(fruits2);