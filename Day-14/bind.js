// bind()
// With the bind() method, an object can borrow a method from another object.
// Sometimes the bind() method has to be used to prevent losing this.


function about(gender,contact){
    console.log(this.firstName,this.age,gender,contact);
}

const user1 = {
    firstName : "Adesh",
    age : 27,
    
}

const user2 = {
    firstName : "Trushant",
    age : 28,
    
}

const myFunction = about.bind(user1,"male","1234567890")
myFunction();







