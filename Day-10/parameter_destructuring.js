// Parameter Destructuring : 
// Destructuring in JavaScript is used to unpack or segregate values from arrays or properties from object literals into distinct variables, thus it allows us to access only the values required.

// object
// react

const userInfo = {
    name : "John",
    gender : "male",
    age : 25,
    contact : 123456
}

function myFunction(obj){
    console.log(obj.name);
    console.log(obj.gender);
    console.log(obj.contact);
    console.log(obj.group   );
}
myFunction(userInfo);

// ***

const userInfo1 = {
    name : "Adesh",
    gender : "Male",
    age : 26,
    contact : 8411938459
}

function myFunction1({name,gender,age,contact}){
    console.log(name);
    console.log(gender);
    console.log(age);
    console.log(contact);
}
myFunction1(userInfo1);