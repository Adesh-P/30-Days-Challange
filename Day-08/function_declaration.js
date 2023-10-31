// Function declaration in javascript :
// JavaScript functions are defined with the function keyword.
// You can use a function declaration or a function expression.

// functions are declared with the following syntax:

// function functionName(parameters) {
//      code to be executed
//   }


//

//function declaration
function myName(){ 
    console.log('My name is John');    // function body
}
myName();     // function call/invoke/run

//

function addition(){
    console.log(10+40);
}
addition();     

//

function multiplication(){
    return 10*10;
}
multiplication();

const result = multiplication();

console.log(result);

//

function division(num1,num2){        // parameter
    return num1 / num2;
}
division();

const result1 = division(100,4);     // argument

console.log(result1);

console.log(undefined + undefined);   // output NaN (Not a number)

console.log(1 + 2 + undefined);   // output NaN (Not a number)
