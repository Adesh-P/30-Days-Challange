// Default Parameter : If a function in JavaScript is called with missing arguments (less than declared), the missing values are set to undefined.

// ***
function addition(a,b){
        return a + b;
}
const ans = addition(5,5);
console.log(ans);

// ***
function addition1(a,b){
    if(typeof b === "undefined"){
        b = 50;
    }
    return a + b;
}
const ans1 = addition1(50);
console.log(ans1);

// ***
function addition3(a,b=500){
    return a + b;
}
const ans3 = addition3(500);
console.log(ans3);