/*
Write a program that calculates the discount for a
product based on its price. If the price is 
above $100, apply a 10% discount; otherwise, 
apply a 5% discount.
*/
let price, discount, new_p;
price = 100;
if (price >= 100) {
  discount = 100 * 0.1;
  new_p = price - discount;
  console.log(
    `The actual price is $${price} you got 10% discount new price is $${new_p}`
  );
} else {
  discount = 100 * 0.05;
  new_p = price - discount;
  console.log(
    `The actual price is $${price} you got 5% discount new price is $${new_p}`
  );
}
