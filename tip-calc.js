const readlineSync = require('readline-sync');

// get total amount of bill
const totalAmount = readlineSync.questionFloat('What is the total bill? $');


// get the party size from the user
const totalPartySize = readlineSync.questionInt('What is the size of your party? ');

let tipPercentage;
// if the party is 6+ people, skip percentage input. auto-assign 18% 
if (totalPartySize >= 6) {
    console.log("Since party size is greater than 5, an 18% tip is automatically applied.")
    tipPercentage = 18;
} else {
    tipPercentage = readlineSync.questionFloat("What percentage would you like to tip? ");
}

// repeat all those things back to the user
// console.log(`The total amount of your bill is: $${totalAmount.toFixed(2)}`);
// console.log(`Your total party size is: ${totalPartySize}`);
// console.log(`The tip percentage being applied is: ${tipPercentage}`);

// tip = usertip * total bill 
let totalTip = totalAmount * (tipPercentage / 100); 

// total bill = bill + tip
let billWithTip = totalAmount + totalTip;

// get total bill divided by number of people 
let totalPerPerson = billWithTip / totalPartySize; 

// calculate how much everyone is paying. ( total bill * tip% ) / party size
console.log(`The total tip is: $${totalTip.toFixed(2)}`);
console.log(`The total bill is: $${billWithTip.toFixed(2)}`);
console.log(`The total bill per person is: ${totalPerPerson.toFixed(2)}`);

