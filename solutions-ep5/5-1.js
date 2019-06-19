/**
 * Assumptions:
 * array has at least 2 elements!!!!!
 * elements are integers
 * */

/**
 * lastIndexOf and indexOf
 * a more general solution for any number of unique elements
 * built in js functions
 * */
console.log(`\n`);
console.log("             JSLeague");
console.log("             Episode 5");
console.log(`\n`);

let uniques1 = (arr) => arr.filter((el, _, self) => self.indexOf(el) === self.lastIndexOf(el));
console.log(`UNIQUES1`)
console.log(uniques1([1, 2, 3, 4, 5, 67, 5, 4, 3, 2, 1, 77]))
console.log(uniques1([-9999, 1, 2, 3, 4, 5, 67, 5, 4, 3, 2, 1, 67, -2]))
console.log(`\n`)