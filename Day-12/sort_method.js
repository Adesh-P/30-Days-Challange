// Sort Method:
// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.

const numbers = [32,15,1,45,25,50,36,100,95];

numbers.sort((x,y) => {
    // return x-y;      // ascending order
    return y-x;         // descending order
});
console.log(numbers);

// Ex:

const names = ["Baldev","adesh","Trushant","Jaywardhan"];

names.sort();
console.log(names);

// Ex:

const products = [
    {productId:1,productName:"mobile",price:20000},
    {productId:2,productName:"television",price:12000},
    {productId:3,productName:"laptop",price:32000},
    {productId:4,productName:"monitor",price:3000}
]

// low to high

const lowToHigh = products.slice(0).sort((a,b) => {
    return a.price-b.price;      // sort by pricing
    
});
console.log(lowToHigh);

// high to low

const highToLow = products.slice(0).sort((a,b) => {
    return b.price-a.price;      // sort by pricing
    
});
console.log(highToLow);