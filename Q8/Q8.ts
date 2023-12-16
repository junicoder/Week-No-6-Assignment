/*
Write a program that checks if the given year is leap year or not.
*/
function isLeapYear(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example usage
let yearToCheck: number = 2023;
let result: boolean = isLeapYear(yearToCheck);

if (result) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}
