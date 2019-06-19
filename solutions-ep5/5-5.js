/**
 * a different approach (brute force)
 * with some improvements
 * 1)stop iterate when we find a double
 * 2)return when we find 2 elements
 * */

let uniques5 = (arr, unq = null) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                i++;
                break;
            } else if (
                (i !== j && arr[i] !== arr[j] && j === arr.length - 1) ||
                (i === arr.length - 1 && j === arr.length - 1)) {
                if (typeof unq == "object") {
                    unq = arr[i];
                } else {
                    return [unq, arr[i]]
                }
            }
        }
    }
}
console.log(`UNIQUES5`)
console.log(uniques5([67, 22, 33, 22, 33, 55]));
console.log(uniques5([1, 2, 33, 4, 5, 67, 5, 4, 3, 2, 1, 3]));
console.log(`\n`)