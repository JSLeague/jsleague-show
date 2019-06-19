/**
 * fun with antoher built in function ->sort
 * we check vicinities
 * */

let uniques3 = (arr) => {
    let sortArr = arr.sort((a, b) => a - b);
    let unq = +Infinity;
    for (let i = 0; i < sortArr.length; i++) {
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            if (unq === +Infinity) {
                unq = arr[i];
            } else {
                return [unq, arr[i]];
            }
        }
    }
}
console.log(`UNIQUES3`)
console.log(uniques3([0, 2, 3, 4, 5, 54, 0, 5, 4, 3, 2, 77]))
console.log(uniques3([67, 77, 3, 4, 5, 1, 2, 4, 3, 2, 1, 5]))
console.log(`\n`)