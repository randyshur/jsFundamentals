// For Loops

for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 2; i <= 20; i+=2) {
    //if (i%2 == 0) console.log(i);
    console.log(i);
}

var x = readline('Enter you idiot');
console.log(x);

myName = 'Randy';

for (i=0; i<=myName.length; i++) {
    console.log(myName.charAt(i));
}

/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
*/
let total = 0
for (i = 1; i <=50; i++) {
    total = total + i;
}
console.log(total);

