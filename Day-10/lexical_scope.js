// Lexical Scope : 
// Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.

// Ex.

function myFunction(){
    let temp1 = "value1";
    let temp2 = "value2"

    const myFunction1 = function(){
        let temp1 = "value3"
        let temp2 = "value4";
        console.log(temp1,temp2);
    }
    myFunction1();



    const myFunction2 = () => {
        console.log(temp1,temp2)
    }
    myFunction2();



    const myFunction3 = () => {
        const temp1 = "value5";
        console.log(temp1,temp2)
    }
    myFunction3();


    console.log(temp1);
}
myFunction();