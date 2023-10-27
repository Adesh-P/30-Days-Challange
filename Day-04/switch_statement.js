// Switch statements - The switch statement is used to perform different actions based on different conditions

let day = +prompt("Enter 0 to 6 numbers here");

if(day === 0){
    alert('Sunday');
} else if(day === 1){
    alert('Monday');
} else if(day === 2){
    alert('Tuesday');
} else if(day === 3){
    alert('Wednesday');
} else if(day === 4){
    alert('Thursday');
} else if(day === 5){
    alert('Friday');
} else if(day === 6){
    alert('Saturday');
} else {
    alert('Invalid day');
}


// Using Switch Statement

let days = +prompt("Enter 0 to 6 numbers here");

switch(days){
    case 0:
        alert('Sun');
        break;
    case 1:
        alert('Mon');
        break;
    case 2:
        alert('Tues');
        break;
    case 3:
        alert('Wednes');
        break;
    case 4:
        alert('Thurs');
        break;
    case 5:
        alert('Fri');
        break;
    case 6:
        alert('Sat');
        break;
    default:
        alert('Invalid day');
}