// Hoisting : 
// Hoisting is JavaScript's default behavior of moving declarations to the top.

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.


// Function declaration

myFunction()                       // Function call before the function

function myFunction(){
    console.log('Hello World');
}                                        // output : Hello World


// Function Expression


// ***
myFunction1()                       

const myFunction1 = function(){
    console.log('Hello World');
}                                        //Cannot access 'myFunction1' before initialization

// ***
myFunction2()                       

let myFunction2 = function(){
    console.log('Hello World');             //Cannot access 'myFunction2' before initialization
}

// ***
myFunction3()                       

var myFunction3 = function(){
    console.log('Hello World');
}