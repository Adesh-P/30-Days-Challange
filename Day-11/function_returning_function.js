// Function Returning Function
// you can call a function that returns another function by first assigning the returned function to a variable and then calling it using the variable name, followed by parentheses.

function myFunction(){
    // return 1;
    // return ["Adesh","Jay","Trushant"];
    // return {name : "Adesh",gender : "male"};
    function childFunction(){
        console.log('Adesh');
    }
    return childFunction;
    
}
const ans = myFunction();
// console.log(ans);         // print childfunction
ans();


// ***

function myFunction1(){
    return function(){
        return "Trushant"
    }
}
const ans1 = myFunction1();
console.log(ans1());