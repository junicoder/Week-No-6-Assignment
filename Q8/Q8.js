"use strict";
/*
Write a program that checks if the given year is leap year or not.
*/
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// Example usage
let yearToCheck = 2023;
let result = isLeapYear(yearToCheck);
if (result) {
    console.log(`${yearToCheck} is a leap year.`);
}
else {
    console.log(`${yearToCheck} is not a leap year.`);
}
