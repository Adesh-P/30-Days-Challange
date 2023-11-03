// Map Method : 
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const numbers = [1,2,3,4,5,6];

const square = function(number){
    return number * number;
}

const squareNumber = numbers.map(square);
console.log(squareNumber);

// **

const squareNumber1 = numbers.map(function(number){
    return number * number;
});
console.log(squareNumber1);


// Example:

const users = [
    {firstName : "Adesh",age : 26},
    {firstName : "Trushant",age : 27},
    {firstName : "Jay",age : 28},
    {firstName : "Sujit",age : 24}
];

const userNames = users.map((user) => {
    return user.firstName;
});

console.log(userNames);