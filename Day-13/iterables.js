// Iterables:
// Iterable objects are objects that can be iterated over with for..of.
// Technically, iterables must implement the Symbol.iterator method.
// string and array are iterables
// objects are not iterable

const firstName = "Adesh";

for(let name of firstName){
    console.log(name);
}

// ***

const items = ['item1','item2','item3','item4'];

for(let item of items){
    console.log(item);
}

// Array like objects

const lastName = "Pawase";
console.log(lastName.length);
console.log(lastName[0]);