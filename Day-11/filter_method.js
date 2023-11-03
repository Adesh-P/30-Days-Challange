// Filter Method :
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.


const numbers = [1,2,3,4,5,6];

const isEven = function(number){
    return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });



// ***

const isOdd = function(number){
    return number % 2 !== 0;
}

const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);
