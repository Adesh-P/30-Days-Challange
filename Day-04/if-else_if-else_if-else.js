// if
// else if
// else if
// else if
// else

let temp = +prompt('Enter temperature here');

// console.log(typeof temp, temp)

if(temp < 0){
    alert('Too cold');
} else if(temp < 25){
    alert('Normal cold');
} else if(temp < 50){
    alert('Normal');
}
else if(temp < 75){
    alert('Hot');
}else {
    alert('Too Hot');
}

// example 2:

let marks = +prompt('Enter your marks here');

if(marks < 35){
    alert("Fail");
} else if(marks < 55) {
    alert('Pass');
} else if(marks < 75){
    alert('Pass with B grade');
} else if(marks < 90){
    alert('Pass with A grade');
} else {
    alert('Pass with Distinction');
}