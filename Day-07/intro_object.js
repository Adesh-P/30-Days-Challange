// Introduction to object
// it is reference type
// arrays are good but not sufficient for real world data
// object store key value pairs
// object dont have index

// Create object

const person = {
    name:"John",
    age:25,
    hobbies: ["Slipping","Playing","Reading"]
};  // name is key and John is value
console.log(person);

// how to access data from object

// console.log(person.age);
console.log(person["age"]);
console.log(person.name);
console.log(person.hobbies);

// how to add key value pair to object

// person.gender = "male";
person["gender"] = "male"
console.log(person);