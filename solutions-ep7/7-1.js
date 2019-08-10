/**
 * Assumptions:
 * numbers are positive integers
 * */


/**
 * helper function
 * */

let gcd_two_numbers = (x, y) => x === 0 ? y : gcd_two_numbers(y % x, x);

let findGCD = arr => {
  let gcd = arr[0];
  arr.map(el => gcd = gcd_two_numbers(el, gcd));
  return gcd;
}

/***
 * helper function test
 */

console.log(gcd_two_numbers(12, 13)) //1
console.log(gcd_two_numbers(120, 80)) //40
console.log(gcd_two_numbers(12, 24)) //12
console.log(gcd_two_numbers(3, 9)) //9

/**
 *main function tests
 * */

console.log(findGCD([4, 12, 8])) //4
console.log(findGCD([13, 12])) //1
console.log(findGCD([1024, 512, 64])) //64