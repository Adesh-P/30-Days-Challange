// arrow functions:


const user1 = {
    firstName : "Adesh",
    age : 27,
    about : () => {
        console.log(this.firstName,this.age);
    }
}
user1.about(user1);