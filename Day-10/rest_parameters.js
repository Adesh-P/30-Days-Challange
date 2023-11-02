// Rest Parameters : 
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

function myFunction(a,b,c,d,e,f,g,h,i,j){
    console.log('a is',a);
    console.log('b is',b);
    console.log('c is',c);
    console.log('d is',d);
    console.log('e is',e);
    console.log('f is',f);
    console.log('g is',g);
    console.log('h is',h);
    console.log('i is',i);
    console.log('j is',j);
}
myFunction(2,4,6,8,10,12,14,16,18,20);



// ***

function myFunction1(A,B,C){
    console.log('A is',A);
    console.log('B is',B);
    console.log('C is',C);
    }
myFunction1(2,4,6,8,10,12,14,16,18,20);


// *** Using rest parameter

function myFunction2(X,Y,...Z){
    console.log('X is',X);
    console.log('Y is',Y);
    console.log('Z is',Z);
    }
myFunction2(2,4,6,8,10,12,14,16,18,20);


// Addition of arguments

function addition(...numbers){
    console.log(typeof numbers);
    console.log(numbers);

    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = addition(1,2,3,4,5,6,7,8,9,10,45);
console.log(ans);