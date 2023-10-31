// Nested Destructuring

const users = [
    {userId : 1, firstName:"Jay", gender:"male"},
    {userId : 2, firstName:"Pooja", gender:"female"},
    {userId : 3, firstName:"Adesh", gender:"male"},
    {userId : 4, firstName:"Rohit", gender:"male"}
];

console.log(users);

//

const [user1,user2,user3] = users;

console.log(user2);

//

const [{firstName},{gender},,{userId}] = users;

console.log(firstName);
console.log(gender);
console.log(userId);

//

const [{firstName:var1},{gender:var2},,{userId:var4}] = users;

console.log(var1);
console.log(var2);
console.log(var4);