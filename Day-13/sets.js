// Sets(It is itrrable)
// store data
// sets also have its own method
// No index-based access
// Order is not guaranted
// unique items only (no duplicate allowed)

const  numbers = new Set([1,2,3,4,3]);
console.log(numbers);


// ***

const names = ["Sujit","Trushant"]

const myNumber = new Set();
myNumber.add(0);
myNumber.add(numbers);
myNumber.add(5);
myNumber.add("Adesh");
myNumber.add(names);

// if(myNumber.has(6)){
//     console.log("6 is present");
// } else {
//     console.log("6 is not present"); 
// }

console.log(myNumber);

for(let number of myNumber){
    console.log(myNumber);   
}

// ****

const myArray = [1,2,3,4,4,3,5,6,6,5];
const uniqueElement = new Set(myArray);
console.log(uniqueElement);

let length = 0;
for(let element of uniqueElement){
    length++;
}
console.log(length);