// truthy and falsy values

// falsy values
// false
// ""
// null
// undefined
// 0

//truthy values
// 1 , -1
// "xyz"

// Ex:1
let firstName = "";

if(firstName){
    alert(firstName);
} else {
    alert('Firstname is empty'); //firstname is empty so else condition is execute
}

//Ex:2
let firstName1 = false;

if(firstName1){
    alert(firstName1);
} else {
    alert('Firstname1 is empty'); 
}

//Ex3
let firstName2 = null;

if(firstName2){
    alert(firstName2);
} else {
    alert('Firstname2 is empty'); 
}

//Ex4
let firstName3 = undefined;

if(firstName3){
    alert(firstName3);
} else {
    alert('Firstname3 is empty'); 
}

//Ex5
let firstName4 = 0;

if(firstName4){
    alert(firstName4);
} else {
    alert('Firstname4 is empty'); 
}

//Ex6
let firstName5 = "Adesh";

if(firstName5){
    alert(firstName5);
} else {
    alert('Firstname5 is empty'); 
}
