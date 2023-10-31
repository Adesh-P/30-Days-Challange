// Object destructuring 

const obj = {
    myName : "John",
    age : 25,
    email : "john123@gmail.com",
    contact : 9876543210,
    blood_group : "O+ve",
    State : "Delhi",
    Pincode : 234567
}

console.log(obj);

// 

// const myName = obj.myName;
// const contact = obj.contact;

// console.log(myName);
// console.log(contact);

//

const{age,email} = obj;

console.log(age);
console.log(email);

//

const{myName:var1, contact:var2,...rest} = obj;  // rest create object of remaining keys

console.log(var1);
console.log(var2);
console.log(rest);