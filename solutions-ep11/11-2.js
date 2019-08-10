/**
 * recursive solution
 * keep a small array of the last two nr using array assignation
 * */

getTheNthFibonacciNr2 = (n, lastTwoNr = [0, 1]) => n > 2 ? getTheNthFibonacciNr2(n = n - 1, [lastTwoNr[1], lastTwoNr[0] + lastTwoNr[1]]) : lastTwoNr[0] + lastTwoNr[1];

// let nrOfOutputs2 = 25;
// new Array(nrOfOutputs2).fill("JsLeague rocks").map((el, i) => console.log(getTheNthFibonacciNr2(i + 1))); //get the first 25 nr
// console.log(getTheNthFibonacciNr2(6)) // 8

/**
 * Fibonacci Formula
 *  nth = (((√5 + 1)/2) ^ n) / √5
 */

getTheNthFibonacciNr3 = (n) => Math.round(Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5));

// let nrOfOutputs3 = 25
// new Array(nrOfOutputs3).fill("JsLeague rocks").map((el, i) => console.log(getTheNthFibonacciNr3(i + 1))); //get the first 25 nr
// console.log(getTheNthFibonacciNr3(6)) // 8