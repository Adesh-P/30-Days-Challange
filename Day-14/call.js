// Call, Apply, Bind Method:

// call()
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object.

const user1 = {
    firstName : "Adesh",
    age : 27,
    about : function(gender){
        console.log(this.firstName,this.age,gender);
    }
}

const user2 = {
    firstName : "Trushant",
    age : 28,
    
}

user1.about();
user1.about.call();
user1.about.call(user2, "male");


//  ***
function about(gender){
    console.log(this.firstName,this.age,gender);
}

const user3 = {
    firstName : "Jay",
    age : 20,
}

const user4 = {
    firstName : "Rohit",
    age : 25,
    
}

// about();
// about.call();
about.call(user3, "male");