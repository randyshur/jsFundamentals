//nickname: FAT ARROW FUNCTIONS

/
*function coffee() {
    console.log("Coffee is life!");
}
*/
// NOT >=

let coffee = () => {
 console.elog("Coffee is cool");
}

var cats = (kitten, puppy) => {
    console.log("blah blah blah")
}

let fatArrows = (x) => console.log(x);

fatArrows("blah blah blah");

let myUpper = (u) =>{ return u.toUpperCase();}
let myLower = (l) =>{ return l.toLowerCase();}

let name = "Randy";

//let x = myUpper(name);

console.log(myLower(myUpper(name)));