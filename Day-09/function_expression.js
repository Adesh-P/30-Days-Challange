//function expression :
// The Javascript Function Expression is used to define a function inside any expression. The Function Expression allows us to create an anonymous function that doesn’t have any function name which is the main difference between Function Expression and Function Declaration


// 1.

const firstName = function(){ 
    console.log('My name is Akshay');    
}
firstName();     // function call/invoke/run

// 2.

const addition = function(){
    console.log('Addition of 10+10 is equal to',10+10);
}
addition();     

// 3.

const multiplication = function(){
    return 4*10;
}
multiplication();

const result = multiplication();

console.log('Multiplication of 4*20 is equal to',result);

// 4.

const division = function(num1,num2){       
    return num1 / num2;
}
division();

const result1 = division(120,2);     

console.log('Division of 120/2 is equal to',result1);

// 5.

const isEven = function(num3) {
    return num3 % 2 === 0;
}
isEven();

const result3 = isEven(101);

console.log('Value is Even',result3);

// 6.

const firstChar = function(anyString){
    return anyString[0];
}
console.log('First letter of string is',firstChar("ADESH"));

// 7.

const array1 = [1,2,3,4,5,6,7,8,9,10];
        
const findTarget = function(array,target){
            for(let i = 0; i < array.length; i++){
                if(array[i] === target){
                    return i;
                }
            }
            return -1;
        }
        findTarget(array1,8);
        
        const ans = findTarget(array1,2);
        
        console.log('Index number of given target is',ans);
