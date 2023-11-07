// Method:
// function inside object 

// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
// this is not a variable. It is a keyword. You cannot change the value of this.

const person = {
    firstName : "Adesh",
    age : 27,
    about : function(){
        // console.log(`person name is ${person.firstName} and age is ${person.age}`);
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
        // console.log(this)
    }
}

// console.log(person.about);
person.about();



/// ***

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Trushant",
    age : 28,
    about : personInfo
}

const person2 = {
    firstName : "Jaywardhan",
    age : 27,
    about : personInfo
}

const person3 = {
    firstName : "Baldev",
    age : 26,
    about : personInfo
}

const person4 = {
    firstName : "Akshay",
    age : 27,
    about : personInfo
}

personInfo();    // undefined output     
person1.about();
person2.about();
person3.about();
person4.about();



// ***
// console.log(window);

function myFunction(){
    // "use strict";
    console.log(this);
}
myFunction();