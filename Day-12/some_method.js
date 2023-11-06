// some method: 
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

const numbers = [3,5,9,10];

const ans = numbers.some((number) => {
    return number % 2 === 0;
});
console.log(ans);


// Example:
const products = [
    {productId:1,productName:"mobile",price:20000},
    {productId:2,productName:"television",price:12000},
    {productId:3,productName:"laptop",price:132000},
    {productId:4,productName:"monitor",price:3000}
];

const ans1 = products.some((product) => {
    return product.price > 100000;
});
console.log(ans1);