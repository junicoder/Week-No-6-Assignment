"use strict";
/*
Write a program to convert the temperature
 from Celsius to Fahrenheit and vice verse.
*/
function cToF(c) {
    return (c * 9) / 5 + 32;
}
function fToC(f) {
    return ((f - 32) * 5) / 9;
}
let celsius = 30;
let fahrenheit = 86;
let resultC = cToF(fahrenheit);
console.log(`${fahrenheit}°F is ${resultC}°C`);
let resultF = fToC(celsius);
console.log(`${celsius}°C is ${resultF}°F`);
