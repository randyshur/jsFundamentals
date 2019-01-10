var student = {name: "Harry", awesome: true, degree: "Javascript", week: 1};

for (item in student) {
    console.log(item);
    console.log(student[item])
}

var pieArray = ['cherry','apple','pumpkin']

for (pie in pieArray) {
    console.log(pie)
}

let name = 'randy';
let cap = null;

for (x in name) {
    if (x==0) {
        console.log(name[x].toUpperCase())
    }
        else {
            console.log(name[x])
        }
    
}