/*
Write a program that calculates the percentage.
*/
function percent(total: number, obt: number) {
  let value: number = (obt / total) * 100;
  let round = parseFloat(value.toFixed(1));
  return round;
}
let per = percent(1100, 1024);
console.log(`The percentage is : ${per}%`);
