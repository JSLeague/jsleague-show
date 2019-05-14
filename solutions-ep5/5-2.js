/**
 * optimization for the version 1
 * return when we find the 2 elements
 * */

let uniques2 = (arr) => {
    let unq = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            if (unq === -Infinity) {
                unq = arr[i];
            } else {
                return [unq, arr[i]];
            }
        }
    }
}
console.log(`UNIQUES2`)
console.log(uniques2([1, 2, 3, 4, 5, 54, 1, 5, 4, 3, 2, 77]))
console.log(uniques2([1, 2, 3, 4, 5, 67, 5, 4, 3, 2, 1, 77]))
console.log(`\n`)
