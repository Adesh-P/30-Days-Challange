// Callback function :
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished


function myName(name){
    console.log('Hello world1')
    console.log('My name is',name)
}


function myFunction(callback){
    console.log('Hello World');
    callback("Adesh");
}
myFunction(myName);


// ***

function mult(num){
    const x = num * num;
    console.log('value of x is',x);
}

function multiplication(callback1){
    let a = 10;
    let b = 5;
    let c = a * b;
    console.log(c);
    callback1(10);
}
multiplication(mult);