/*
Challenge
Capitalize first letter of name
*/

let myName = 'harRy';
console.log(myName);

myName = myName.toLowerCase();
console.log(myName);

myName = myName.substring(0, 1).toUpperCase() + myName.substring(1);
console.log(myName);

/*
Age challenge
*/
let age = 25;

if (age <= 17) {
    console.log("No fun for U!");
} else if (age >= 18) {
    console.log("U can vote!");

    if (age >= 21) {
        console.log("U can drink!");

        if (age >= 25) {
            console.log("U can rent a car!");
        }
    }
}

let dessert = 'Ice Cream';

switch (dessert) {
    case "Pie":
        console.log('Its Pie');
        break;
    case "Cake":
        console.log("It's Cake");
        break;
    case "Ice Cream":
        console.log("It's Ice Cream");
        break;
    default:
        console.log("No desseret for u");
}