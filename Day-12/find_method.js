// Find Method : 
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

const names = ["Trushant","Sujita","Adesh","Love","Bobby"];

function myFunction(string){
    return string.length == 5;
}

const ans = names.find(myFunction);
console.log(ans);


// Ex:
const users = [
    {userId: 1, userName: "Adesh"},
    {userId: 2, userName: "Love"},
    {userId: 3, userName: "Jaya"},
    {userId: 4, userName: "Sujit"},
    {userId: 5, userName: "Rohit"}
];

const answer = users.find((user) => {
    return user.userId === 5;
});
console.log(answer);
