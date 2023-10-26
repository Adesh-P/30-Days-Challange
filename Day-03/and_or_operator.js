// and or operator

// and operator &&   -The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.

let age = 14;
let firstName = "NAYAN";

if(firstName[4] === "N"){
    alert('Your name ends with N')
}

if(age<20){
    alert('Your age is below 20')
}

//using and && operator

let age1 = 20;
let firstName1 = "Ram";

if(firstName1[0] === "R" && age > 10){
    alert('Name Start with R and age is above 10');
} else {
    alert('inside else');
}

// Using or || operator  -The logical OR ( || ) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values.

let age2 = 25;
let firstName2 = "Rajesh";

if(firstName2[0] === "R" || age2 > 30){
    alert('inside if');
} else {
    alert('inside else');
}



