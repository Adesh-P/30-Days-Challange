// maps
// store data in ordered fashion
// duplicate keys are not allowed like objects

// maps is an iterable
// store key value pair (like object)
const person = new Map(); 
person.set('firstName','Harshit');
person.set('age',20);
person.set(1,"one");
// person.set([1,2,3],"four");
// person.set({1 : 'one', 2 : 'two'},"three");
console.log(person);

console.log(person.get('firstName'));
console.log(person.get('age'));
console.log(person.get(1));
console.log(person.keys());


for(let key of person.keys()){
    console.log(key, typeof key);
}

for(let [key,value] of person){
    // console.log(Array.isArray(key));
    console.log(key,value);
}

// ***

const personInfo = new Map([['firstName','Harshit'],['age',25]]);
console.log(personInfo);

// ***

const personInfo1 = {
    id : 1,
    firstName : "Adesh"
}

const userInfo = new Map(); 
userInfo.set(personInfo1,{age:20,gender:'male'});
console.log(userInfo);
console.log(personInfo1.id);
console.log(userInfo.get(personInfo1).gender);