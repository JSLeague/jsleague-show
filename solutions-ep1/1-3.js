const solution2 = (arr1, arr2, sum) => {

    /**
     * This solution it is faster than the previous when we have large arrays with a lot of elements bigger
     * than the sum because we are checking only some of
     * the elements of the arrays and not all of them but, we are still doing some expensive computations at the
     * beginning with sort and filter
     * */

    let arr1_sort_filter = arr1.filter(el => el <= sum).sort((a, b) => a - b);
    let arr2_sort_filter = arr2.filter(el => el <= sum).sort((a, b) => a - b);
    let output = [];

    for (let i = 0; i < arr1_sort_filter.length; i++) {
        for (let j = 0; j < arr2_sort_filter.length; j++) {
            if (arr1_sort_filter[i] + arr2_sort_filter[j] === sum) {
                output.push([arr1_sort_filter[i], arr2_sort_filter[j]]);

                /**
                 * we don't stop our search here because we may have elements with the
                 * same value (but with different indices), and this is why is a must the next step
                 * in which we will stop our search when the sum of the 2 values is bigger then the sum parameter
                 * */

            }
            if (arr1_sort_filter[i] + arr2_sort_filter[j] > sum && j !== arr2_sort_filter.length - 1) {

                /**
                 * 1)we stop checking the next values in the next array since the array is sorted ascending
                 * and the sum of actual values is bigger than the sum (we will only get bigger numbers)
                 * 2)we are also check if we are already at the last element because we will have double increment
                 * and we will skip the next element in the first array
                 * */

                i++;
            }
        }
    }
    return output;

};
// console.log(solution2([1, 2, 3, 5], [3, 5, 2, 1], 5));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));
