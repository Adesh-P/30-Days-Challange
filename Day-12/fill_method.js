// fill method:
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.

// value , start , end

const myArray = new Array(5).fill(-1);
console.log(myArray);

// ***
const myArray1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];  
myArray1.fill(0,9,14);
console.log(myArray1);