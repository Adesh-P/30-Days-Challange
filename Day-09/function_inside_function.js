// Function inside function

function mathematics(){
    console.log('Solve the mathematical expression');

    //arrow function
    const addition = (num1,num2) => {
        return num1 + num2;
    }
    console.log(addition(25,75));

    // function declaration
    function multiplication(num1,num2){
        return num1*num2;
    }
    console.log(multiplication(25,4));

    //function expression
    const division = function(num1,num2){
        return num1 / num2;
    }
    console.log(division(1000,10));
}
mathematics();



