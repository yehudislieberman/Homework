'use strict';
function fahrenheit(c) {
    let f = (c * 9 / 5) + 32;
    alert(`${c}C = ${f}F`);
}
function celsius(f) {
    let c = (f - 32) * 5 / 9;
    alert(`${f}F = ${c}C`);
}

fahrenheit(2);
fahrenheit(4);
celsius(6);
celsius(8);

let NowFahren = prompt('Pick a number to convert from Celsius to Fahrenheit');
fahrenheit(NowFahren);
let NowCels = prompt('Pick a number to convert from Fahrenheit to Celsius');
celsius(NowCels);

