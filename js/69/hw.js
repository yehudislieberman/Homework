const interestCalculator = (function Calculator () {
    'use strict';

    let iRate;
    let Years;

    function setRate(rate) {
        iRate = rate;
    }
    function setYears(years) {
        Years = years;
    }

    function calculateInterest(principleAmount) {
        let p = principleAmount;
        p = p * iRate * Years;
    
    return p - principleAmount;
}
    
    return{
        setRate,
        setYears,
        calculateInterest
    };
}());

interestCalculator.setRate(0.25);
interestCalculator.setYears(5);
console.log(`Total interest: ${interestCalculator.calculateInterest(2500)}`);


function NewAccount(balance) {
    return {
        balance,
        performTransaction(transactionAmount) {
            this.balance += transactionAmount;
        }
    };
}

const account1 = NewAccount(2500);
const account2 = NewAccount(5000);

account1.performTransaction(500);
account2.performTransaction(-2000);

console.log(account1.balance);
console.log(account2.balance);


function createAccount(balance) {
    return {
        balance
    };
}
const newAccount1 = createAccount(500);
const newAccount2 = createAccount(1500);


function performTransaction(transactionAmount) {
    this.balance += transactionAmount;
}

performTransaction.call(newAccount1, 500);
performTransaction.apply(newAccount2, [-500]);

console.log(newAccount1.balance);
console.log(newAccount2.balance);

const depositFiftyInAccount1 = account1.performTransaction.bind(account1);
depositFiftyInAccount1(50);
console.log(account1.balance);

const depositFiftyInAccount2 = account2.performTransaction.bind(account2);
depositFiftyInAccount2(50);
console.log(account2.balance);