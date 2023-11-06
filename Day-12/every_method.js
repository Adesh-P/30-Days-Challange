// every method:
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array.

const numbers = [2,4,6,8,10];

const ans = numbers.every((number) => {
    return number % 2 === 0;
});
console.log(ans);


//***

const products = [
    {productId:1,productName:"mobile",price:20000},
    {productId:2,productName:"television",price:12000},
    {productId:3,productName:"laptop",price:32000},
    {productId:4,productName:"monitor",price:3000}
];

const ans1 = products.every((product) => {
    return product.price < 35000;
});
console.log(ans1);