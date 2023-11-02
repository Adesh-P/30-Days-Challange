// Block scope vs Function Scope : 
// let and const are block scope and var is function scope
// Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function. 
// Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.


// block scope
//*** 
function myfunction(){
    if(true){
        let firstName = "Adesh";
        let lastName = "Pawase";
        console.log(firstName);
    }
    // console.log(lastName);
}
myfunction();

//***
function myfunction1(){
    if(true){
        const firstName1 = "Jaywardhan";
        const lastName1 = "Jadhav";
        console.log(firstName1);
    }
    // console.log(lastName1);                                         
}
myfunction1();


// Function Scope

function myfunction2(){
    if(true){
        var firstName2 = "Trushant";
        var lastName2 = "Bhangare";
        console.log(firstName2);
    }
    console.log(lastName2);
}
myfunction2();