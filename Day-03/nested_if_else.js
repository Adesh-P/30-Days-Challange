// nested if else

let winningNumber = 20;
let userGuess = +prompt("Enter the Number here");

if(userGuess === winningNumber){
    alert('Your guess is correct');
} else {
    if(userGuess < winningNumber){
        alert('Your guess is too low');
    } else {
        alert('Your guess is too high');
    }
}