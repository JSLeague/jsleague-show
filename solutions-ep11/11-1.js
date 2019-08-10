/**
 * assumptions: n is greater than 0
 * disambiguation: the first element is 1, the second is also 1, third is 2
 * I will skip the inefficient methods when you have to generate very big list of numbers
 * */


/**
 * Readable solution
 * keep a small array of the last 2 nr using built in js functions
 * */

getTheNthFibonacciNr = (n) => {
  if (n === 1) return n;

  let lastTwoNr = [0, 1];
  let nr = 0;
  while (n > 1) {
      nr = lastTwoNr[0] + lastTwoNr[1];
      n--;
      lastTwoNr.push(lastTwoNr[0] + lastTwoNr[1]);
      lastTwoNr.shift();
  }
  return nr
};


//for testing
// let nrOfOutputs = 25;
// new Array(nrOfOutputs).fill("JsLeague rocks").map((el, i) => console.log(getTheNthFibonacciNr(i + 1))); //get the first 25 nr
// console.log(getTheNthFibonacciNr(6)) // 8