const solution3 = (arr1, arr2, sum) => {

    /**
     * This solution may come in handy when we have one array with one type of numbers(even/odd) and the other array has
     * the other type (even/odd) and a certain type (even/odd) fo the sum param
     * but, still we are doing a filter(map) at the beginning which is performance consuming
     * ex: arr1 = [0,2,1,3,....20 000 odds...], arr2 = [4,6,8], sum = 10;
     * but it can be more performance consuming then the first method O(m+n+m*n)
     * */

    let output = [];
    let arr1_even = [];
    let arr1_odd = [];
    let arr2_even = [];
    let arr2_odd = [];
    arr1.map(el => el % 2 === 0 ? arr1_even.push(el) : arr1_odd.push(el));
    arr2.map(el => el % 2 === 0 ? arr2_even.push(el) : arr2_odd.push(el));

    if (sum % 2 === 0) {
        for (let i = 0; i < arr1_even.length; i++) {
            for (let j = 0; j < arr2_even.length; j++) {
                if (arr1_even[i] + arr2_even[j] === sum) {
                    output.push([arr1_even[i], arr2_even[j]])
                }
            }
        }

        for (let i = 0; i < arr1_odd.length; i++) {
            for (let j = 0; j < arr2_odd.length; j++) {
                if (arr1_odd[i] + arr2_odd[j] === sum) {
                    output.push([arr1_odd[i], arr2_odd[j]])
                }
            }
        }

    } else {
        for (let i = 0; i < arr1_even.length; i++) {
            for (let j = 0; j < arr2_odd.length; j++) {
                if (arr1_even[i] + arr2_odd[j] === sum) {
                    output.push([arr1_even[i], arr2_odd[j]])
                }
            }
        }

        for (let i = 0; i < arr1_odd.length; i++) {
            for (let j = 0; j < arr2_even.length; j++) {
                if (arr1_odd[i] + arr2_even[j] === sum) {
                    output.push([arr1_odd[i], arr2_even[j]])
                }
            }
        }
    }

    return output;
};

// console.log(solution3([1, 2, 3, 3, 3, 3, 5, 0], [3, 5, 2, 1], 4));
// console.log(solution3([1, 2, 3, 3, 3, 3, 5, 0], [3, 5, 2, 1], 5));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));