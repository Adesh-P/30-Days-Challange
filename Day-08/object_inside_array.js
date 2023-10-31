// Objects inside the Array :
// It is very useful in real world application

const users = [
    {userId : 1, firstName:"Jay", gender:"male"},
    {userId : 2, firstName:"Pooja", gender:"female"},
    {userId : 3, firstName:"Adesh", gender:"male"},
    {userId : 4, firstName:"Rohit", gender:"male"}
];

console.log(users);

// Using for of loop 


for(let user of users){
    // console.log(user);
    
    console.log(user.firstName);
}