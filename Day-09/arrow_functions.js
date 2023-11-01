// Arrow Function : Arrow functions are a new way to write anonymous function expressions
// It is written as =>

// 1.

const firstName = () => { 
    console.log('My name is Adesh');    
}
firstName();


// 2.

const addition = () => {
    console.log('Addition of 50+50 is equal to',50+50);
}
addition(); 


// 3.

const multiplication = () => {
    return 10*10;
}
multiplication();

const result = multiplication();

console.log('Multiplication of 10*10 is equal to',result);


// 4.

const division = (num1,num2) => {       
    return num1 / num2;
}
division();

const result1 = division(300,3);     

console.log('Division of 300/3 is equal to',result1);


// 5.

const isEven = (num3) => {
    return num3 % 2 === 0;
}
isEven();

const result3 = isEven(1000);

console.log('Value is Even',result3);

// const isEven = num3 => num3 % 2 === 0


// 6.

const firstChar = (anyString) => {
    return anyString[0];
}
console.log('First letter of string is',firstChar("ADESH"));






     









