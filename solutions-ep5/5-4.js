/**
 * fun with antoher built in function ->reduce
 * */
let uniques4 = (arr) => arr.reduce((acc, cur, _, self) => self.indexOf(cur) === self.lastIndexOf(cur) ? acc.concat(cur) : acc.concat([]), []);
console.log(`UNIQUES4`)
console.log(uniques4([1, 2, 3, 4, 5, 67, 5, 4, 3, 2, 1, -2]));
console.log(uniques4([1, 2, 33, 4, 5, 67, 5, 4, 3, 2, 1, 3]));
console.log(`\n`)