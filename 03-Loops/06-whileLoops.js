// Check to see if every charater in a string is unique

function isUnique(theString) {

    let notUnique = false;

    for (i=0; i<theString.length; i++) {
        for (j=i+1; j<theString.length; j++)
            if (theString[i] == theString[j]) {
                notUnique = true;
            }
    }

    if (notUnique) {
        console.log('Not unique');
    } else {
        console.log('Unique');
    }
}

isUnique("stuff");

