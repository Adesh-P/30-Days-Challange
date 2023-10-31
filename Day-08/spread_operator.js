// Spread Operator :
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// The spread operator is often used in combination with destructuring.

// Spread operator in array

const array1 = [1,2,3];
const array2 = [4,5,6];

// const newArray = [...array1,...array2];
const newArray = [...array1,...array2, 39];
const newArray1 = [..."ADESH"];
console.log(newArray);
console.log(newArray1);


// Spread operator in objects

const obj1 = {
    key3 : "value3",
    key4 : "value4"
}
 
const obj2 = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
    key4 : "value4",
    key5 : "value5"
}

// const newObj ={...obj1,...obj2};
const newObj ={...obj1,...obj2, key6 : "value6"};        // value3 and value 4 for obj1 is overide

const newObj1 = {...["value1","value10","value15"]};

const newObj2 = {..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"};

console.log(newObj);
console.log(newObj1);
console.log(newObj2);
