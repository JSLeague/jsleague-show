/**
 * Recursive in one line with focus on indexes
 * - with extra help from default variables
 * - more efficient then the previous ones
 * */

const checkPalindromeRecursive1 = (str, s = 0, e = str.length - 1) => str[s] === str[e] ? e === s || e + 1 === s ? true : checkPalindromeRecursive1(str, ++s, --e) : false;

console.log("Check palindrome with recursion  @ checkPalindromeRecursive1 @ \n");
console.log(`"roma summus amor" is a palindrome ->`, checkPalindromeRecursive1("roma summus amor"));
console.log(`"cojoc" is a palindrome ->`, checkPalindromeRecursive1("cojoc"));
console.log(`"anna" is a palindrome ->`, checkPalindromeRecursive1("anna"));
console.log(`"tar" is a palindrome ->`, checkPalindromeRecursive1("tar"));
console.log(`"tr" is a palindrome ->`, checkPalindromeRecursive1("tr"));
console.log(`"pp" is a palindrome ->`, checkPalindromeRecursive1("pp"));
console.log("@@@@@ add extra test cases");
console.log("\n");
