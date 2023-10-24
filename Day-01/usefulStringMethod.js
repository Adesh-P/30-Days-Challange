// Usefull String Methods

// 1.trim() - This method is used to remove after and before space of string

let firstName = "   JOHN   ";

console.log(firstName)

console.log(firstName.length);  // length of string including space

firstName = firstName.trim(); // trim the after and before space

console.log(firstName);

console.log(firstName.length); // lenngth of string after trim the space

//2.toUpperCase - This method is used to write letters in uppercase

let lastName = "doe";

lastName = lastName.toUpperCase();

console.log(lastName);

//3.toLowerCase - This method is used to write letters in lowercase

let lastName1 = "DOE";

lastName1 = lastName1.toLowerCase();

console.log(lastName1);

//4.slice() - The slice() method selects from a given start, up to a (not inclusive) given end.

let fName = "RajaRam";

fName = fName.slice(4,7); // display index 4 to 6

console.log(fName);
