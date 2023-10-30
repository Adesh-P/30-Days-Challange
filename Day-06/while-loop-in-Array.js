// While loop in array

const fruits = ["Apple","Grapes","Banana"];

const fruits2 = []

let i=0;
while(i<fruits.length){
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);