"use strict";
/*
 Develop a program that determines
 the day of the week. Ask the user
 for a number (1-7) and use nested if
 statements to print the corresponding day's name.
*/
let day = 6;
if (day >= 1 && day <= 7) {
    if (day == 1) {
        console.log("Monday");
    }
    else if (day == 2) {
        console.log("Tuesday");
    }
    else if (day == 3) {
        console.log("Wednesday");
    }
    else if (day == 4) {
        console.log("Thrusday");
    }
    else if (day == 5) {
        console.log("Friday");
    }
    else if (day == 6) {
        console.log("Saturday");
    }
    else {
        console.log("Sunday");
    }
}
else {
    console.log("Enter a valid day");
}
