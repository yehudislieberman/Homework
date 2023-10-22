'use strict'; 

function newMap(array, callbackFn) {
    
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const index= (callbackFn(array[i]));
        newArray.push(index);
    }
    return newArray;
}

const originalArray = [2, 4, 6];

const doubledArray = newMap(originalArray, doubleFn);

function doubleFn(num) {
    return num * 2;
}

console.log(originalArray);
console.log(doubledArray);