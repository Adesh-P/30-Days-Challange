// Ternory operators

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement

let age = 15;
let drink = "";

if(age>=8){
    drink = "coffee"
    alert(drink);
} else {
    drink = "milk"
    alert(drink);
}

//Using ternory operator / conditional operator

let age1 = 3;
let drink1 = age1 >= 5 ? "Tea" : "juice";

alert(drink1);