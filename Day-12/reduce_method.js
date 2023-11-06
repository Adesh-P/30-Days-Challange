// Reduce Method :
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

const number = [1,2,3,4,5];

const sum = number.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);


// Example:

const userCart = [
    {productId:1,productName:"Mobile",price:15000},
    {productId:2,productName:"Laptop",price:55000},
    {productId:3,productName:"Refrigerator",price:30000},
]

const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
},0);
console.log(totalAmount);