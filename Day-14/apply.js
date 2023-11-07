// apply()
// With the apply() method, you can write a method that can be used on different objects.
// The apply() method is similar to the call() method
// The Difference Between call() and apply()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// The apply() method is very handy if you want to use an array instead of an argument list.

const user1 = {
    firstName : "Adesh",
    age : 27,
    about : function(gender,contact){
        console.log(this.firstName,this.age,gender,contact);
    }
}

const user2 = {
    firstName : "Trushant",
    age : 28,
    
}


user1.about.apply(user2, ["male","12345"]);


//  ***
function about(gender,contact){
    console.log(this.firstName,this.age,gender,contact);
}

const user3 = {
    firstName : "Jay",
    age : 20,
}

const user4 = {
    firstName : "Rohit",
    age : 25,
    
}


about.apply(user3, ["male","98765"]);