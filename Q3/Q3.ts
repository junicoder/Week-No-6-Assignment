/*
 Write a program that converts given number 
 of days in to weeks and days such 
 as 17 days = 2 weeks and 3 days.
*/
function dayToWeek(day: number): string {
  const weeks = (day / 7).toFixed(0);
  const remainingDays = (day % 7).toFixed(0);

  if (weeks === "0") {
    return `${day} days`;
  } else if (remainingDays === "0") {
    return `${weeks} week${weeks > "1" ? "s" : ""}`;
  } else {
    return `${weeks} week${weeks > "1" ? "s" : ""} and ${remainingDays} day${
      remainingDays > "1" ? "s" : ""
    }`;
  }
}

let days = 22;
let result = dayToWeek(days);
console.log(result);
