//Create a program that determines the category
//of a user-provided age. If the age is between 0 and 12,
//print "Child." If it's between 13 and 19, print "Teenager."
//Otherwise, print "Adult."
let age: number;
function agedeter(age: number): string {
  if (age >= 0 && age <= 12) {
    return "Child";
  } else if (age >= 13 && age <= 19) {
    return "Teenager";
  } else if (age > 19) {
    return "Adult";
  } else {
    return "Enter valid age";
  }
}
let tell: string = agedeter(-11);
console.log(tell);
