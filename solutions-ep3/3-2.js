/**
 * recursive
 * */

const getClosestSquare2 = (nr, i = 1) => {
    if (nr < 2) return nr;
    return i * i < nr ? getClosestSquare2(nr, ++i) : i * i === nr || i * i - nr < nr - (i - 1) * (i - 1) ? i : --i;
};

console.log("Start solution 2, recursive");
console.log(getClosestSquare1(15));
console.log(getClosestSquare2(10));
console.log(getClosestSquare2(0));
console.log(getClosestSquare2(2));
console.log(getClosestSquare2(100));
console.log(getClosestSquare2(156));
console.log(getClosestSquare2(196));
console.log(getClosestSquare1(71));
console.log("\n");
