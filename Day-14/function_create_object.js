


const user1 = {
    firstName : "Adesh",
    lastName : "Pawase",
    email : "pawase.adesh2016@gmail.com",
    age : 27,
    address : "Sangamner,Maharashtra",
    about : function(){
        return `${this.firstName} is ${this.age} year old`
    }
}

// const userInfo = user1.about();
// console.log(userInfo)


// function (that function create object)
// add key value pair
// return the object

function createUser(firstName,lastName,email,age,address){
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} year old`
    }
    return user;
}

const user2 = createUser("trushant","Bhangare","Trushant123@gmail.com",28,"Javale Kadalag,Sangamner");
console.log(user2);

const aboutUser = user2.about();
console.log(aboutUser);