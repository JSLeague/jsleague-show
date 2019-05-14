/**
 * Assumptions (for the sake of simplicity)
 * 1)input is a string
 * 2)input is at least length 2
 * 3)I ignore letter case (I ignore transformation to lowercase or uppercase)
 * 4)I won't check for special characters like (!@#$%^&**(~/\|)
 * 5)ex:
 * "Roma summus amor" (true) //odd length
 * "cojoc" (true) //odd length
 * "unu"  (true) //odd length
 * "Anna" (true) //even length
 * */


/**
 * naive but readable solution with built-in, but expensive functions;
 * reverse entire string
 * */

const checkPalindromeCase = (str) => [...(str.toLowerCase())].reverse().join("") === str.toLowerCase();//with case
const checkPalindrome = (str) => [...str].reverse().join("") === str;//without case

console.log("Check palindrome with built-in functions  @ checkPalindrome @ \n");
console.log(`"roma summus amor" is a palindrome ->`, checkPalindrome("roma summus amor"));
console.log(`"cojoc" is a palindrome ->`, checkPalindrome("cojoc"));
console.log(`"anna" is a palindrome ->`, checkPalindrome("anna"));
console.log(`"tar" is a palindrome ->`, checkPalindrome("tar"));
console.log(`"tr" is a palindrome ->`, checkPalindrome("tr"));
console.log(`"pp" is a palindrome ->`, checkPalindrome("pp"));
console.log("@@@@@ add extra test cases");
console.log("\n");
