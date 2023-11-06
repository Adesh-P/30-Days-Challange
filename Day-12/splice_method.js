// splice method:
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// start, delet, insert

const array1 = ["Adesh","Trushant","Rohit","Sujit"];
const ans = array1.splice(0,2);       // delet
console.log(array1);
console.log('Deleted names is',ans);

// ***

const array2 = ["Adesh","Trushant","Rohit","Sujit"];
array2.splice(2,0,"Bhangare");            // insert
console.log(array2);

// ***

const array3 = ["Adesh","Trushant","Rohit","Sujit"];
const deletedItem = array3.splice(1,1,"Pawase");                // insert and delet
console.log(array3);
console.log('Deleted names is',deletedItem);

