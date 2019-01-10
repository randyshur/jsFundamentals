let age = 30
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'

console.log((age <18) ? young : (age >17) ? vote : (age >20) ? vote+drink : (age >24) ? vote+drink+rent:"nothing");
