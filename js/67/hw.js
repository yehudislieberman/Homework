'use strict';

function OurEvery(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (!callback(theArray[i])) {
            return false;
        }
    }
    return true;
}

const uppercase = ['A', 'B', 'C'];
const mixed = ['A', 'B', 'c'];

function isUpper(letter) {
    return letter.toUpperCase() === letter;
}
function isLower(letter) {
    return letter.toLowerCase() === letter;
}

console.log(OurEvery(uppercase, isUpper));
console.log(OurEvery(mixed, isUpper));

console.log(OurEvery(uppercase, isLower));
console.log(OurEvery(mixed, isLower));

console.log(uppercase.every(isUpper));
console.log(mixed.every(isUpper));

console.log(uppercase.every(isLower));
console.log(mixed.every(isLower));



function OurSome(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
            return true;
        }
    }
    return false;
}

console.log(OurSome(uppercase, isUpper));
console.log(OurSome(mixed, isUpper));

console.log(OurSome(uppercase, isLower));
console.log(OurSome(mixed, isLower));

console.log(uppercase.some(isUpper));
console.log(mixed.some(isUpper));

console.log(uppercase.some(isLower));
console.log(mixed.some(isLower));



function onlyIf(array, testCallback, actionCallback) {
    array.forEach(element => {
        if (testCallback(element)) {
            actionCallback(element);
        }
    });
}

onlyIf(mixed, isUpper, a => console.log(a));

const lower = mixed.filter(isLower);
lower.forEach(l => console.log(l));