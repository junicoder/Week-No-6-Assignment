/*
 Write a program that checks if the 
 given number is  divisible by 3 or 5 or 
 both or not divisible by anyone show 
 output accordingly.
*/
function numdivisible(num: number) {
  if (num % 3 == 0) {
    console.log("Divisible by 3");
  } else if (num % 5 == 0) {
    console.log("Divisible by 5");
  } else {
    console.log("Not divisile by 3 & 5");
  }
}
let num = numdivisible(34);
console.log(num);
