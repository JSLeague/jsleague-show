const solution4 = (arr1, arr2, sum) => {

    /**
     * In this solution we are searching for each element in the first array the difference in the second and the
     * speed of this solution is correlated with the speed of 'includes/indexOf method'
     * * */

    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr2Buffer = [...arr2];
        while (arr2Buffer.includes(sum - arr1[i])) {
            output.push([arr1[i], sum - arr1[i]]);
            arr2Buffer.splice(arr2Buffer.indexOf(sum - arr1[i]), 1);
        }
    }
    return output;
};
// console.log(solution4([1, 2, 3, 3, 5, 0], [3, 5, 2, 1], 4));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));