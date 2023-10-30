// How to iterate object

const person = {
    name:"John",
    age:25,
    "person hobbies": ["Slipping","Playing","Reading"]  
};

// for in loop 

for(let key in person){
    // console.log(key);
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`);
    console.log(key," : ",person[key]);
}

console.log(Object.keys(person));

