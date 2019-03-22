/**
 * I assumed that arrays have positive integers and the sum is positive integer
 * */

const solution1 = (arr1, arr2, sum) => {
    /**
     * this solution is clean and readable but is the most inefficient (O(n*m))
     * */

    let output = [];
    arr1.map(el1 => arr2.map(el2 => el1 + el2 === sum ? output.push([el1, el2]) : null));
    return output;
};
// console.log(solution1([1, 2, 3, 5, 0], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));
