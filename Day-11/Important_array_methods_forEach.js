// Important Array Methods For Each
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// forEch
// map
// filter
// reduce

const numbers = [2,4,8,16,32];

function myFunction(number,index){
    // console.log('index is',index);
    // console.log(`${number}*2 = ${number*2}`);
    console.log(`index is ${index} and number is ${number}`)
}
myFunction(numbers[0],0);
myFunction(numbers[1],1);
myFunction(numbers[2],2);
myFunction(numbers[3],3);
myFunction(numbers[4],4);

console.log('Using for loop')

// using for loop

// for(let i = 0; i < numbers.length; i++){
//     // console.log(i);
//     myFunction(numbers[i],i)
// }



numbers.forEach(myFunction);

console.log('***')
// ***

const age = [12,14,18,16,32];

age.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`)
});


// ***

const obj = [
    {firstName : "Adesh",age : 26},
    {firstName : "Trushant",age : 27},
    {firstName : "Jay",age : 28},
    {firstName : "Sujit",age : 24}
];

obj.forEach(function(user){          // using forEach
    console.log(user.firstName);
});

// obj.forEach((user) => {          // using arrow function
//     console.log(user.firstName);
// });

for(let user of obj){               // using for of
    console.log(user.age);
}