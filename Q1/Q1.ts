/*
Write a program to convert the temperature
 from Celsius to Fahrenheit and vice verse.
*/
function cToF(c: number): number {
  return (c * 9) / 5 + 32;
}
function fToC(f: number): number {
  return ((f - 32) * 5) / 9;
}
let celsius: number = 30;
let fahrenheit: number = 86;
let resultC: number = cToF(fahrenheit);
console.log(`${fahrenheit}°F is ${resultC}°C`);
let resultF: number = fToC(celsius);
console.log(`${celsius}°C is ${resultF}°F`);
