/**
 * assumptions
 * i>=0;
 * i is an integer
 * */


const getClosestSquare1 = (nr) => {
  if (nr < 2) return nr;
  let i = 1;
  while (i * i < nr) {
    i++;
  }
  if (i * i === nr) return i;
  return i * i - nr < nr - (i - 1) * (i - 1) ? i : --i;
}
console.log("Start solution 1");
console.log(getClosestSquare1(15));
console.log(getClosestSquare1(10));
console.log(getClosestSquare1(0));
console.log(getClosestSquare1(2));
console.log(getClosestSquare1(100));
console.log(getClosestSquare1(156));
console.log(getClosestSquare1(196));
console.log(getClosestSquare1(71));
console.log("\n");

