const readlineSync = require('readline-sync');

// get total amount of bill
const totalAmount = readlineSync.questionFloat('What is the total bill? $');


// get the party size from the user
const totalPartySize = readlineSync.questionInt('What is the size of your party? ');

// get the % tip from the user
const tipPercentage = readlineSync.questionFloat("What percentage would you like to tip? ");

// repeat all those things back to the user
console.log(typeof totalAmount, typeof totalPartySize, typeof tipPercentage);

// tip = usertip * total bill 

// total bill = bill + tip



// calculate how much everyone is paying. ( total bill * tip% ) / party size

