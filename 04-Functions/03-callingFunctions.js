// Declaration
function hi () {
    console.log('HI');
    return "Hey";
}

//hi;
//hi();
//console.log(hi);
//console.log(hi());

//create a function that when invoked lists out number from 1 to 10
function tencount() {
    for (x=1; x<10; x++) {
        console.log(x);
    }
    return 'done';
}

//tencount();
//console.log(tencount());

let amidone = tencount();

let arr = ["this", "is", "really", "cool"]

function prarr(localarr) {

    for (element of localarr) {
        console.log(element)
    }

}


prarr(arr);