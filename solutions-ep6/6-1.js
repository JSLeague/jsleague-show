/**
 * Given an array of integers return a copy of the array with only unique elements,
 * in the same order as they appear first in the original array.
 * */

//pretty straightforward with filter

const uniqElements = (arr) => arr.filter((el, i, self) => self.indexOf(el) === i);

console.log(uniqElements([1, 2, 2, 22, 2, 3, 43, 4, 4, 54, 5]));
console.log(uniqElements([1, 2, 2, 5, 5, 5, 1, 1, 1, 2, 2]));