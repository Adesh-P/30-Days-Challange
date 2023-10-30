// Difference between Dot and Bracket Notation

const key = "email";
const person = {
    name:"John",
    age:25,
    "person hobbies": ["Slipping","Playing","Reading"]  
};

// console.log(person.person hobbies);     It gives error so using bracket notation
console .log(person["person hobbies"]);

// person["key"] = "johndoe123@gmail.com"; 
person[key] = "johndoe123@gmail.com";  

console.log(person);