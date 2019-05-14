/**
 * recursive in one line with focus on input slice and no help variables
 * */

const checkPalindromeRecursive2 = (str) => str.length < 2 ? true : str[0] === str[str.length - 1] ? checkPalindromeRecursive2(str.slice(1, str.length - 1)) : false;


console.log("Check palindrome with recursion  @ checkPalindromeRecursive2 @ \n");
console.log(`"roma summus amor" is a palindrome ->`, checkPalindromeRecursive2("roma summus amor"));
console.log(`"cojoc" is a palindrome ->`, checkPalindromeRecursive2("cojoc"));
console.log(`"anna" is a palindrome ->`, checkPalindromeRecursive2("anna"));
console.log(`"tar" is a palindrome ->`, checkPalindromeRecursive2("tar"));
console.log(`"tr" is a palindrome ->`, checkPalindromeRecursive2("tr"));
console.log(`"pp" is a palindrome ->`, checkPalindromeRecursive2("pp"));
console.log("@@@@@ add extra test cases");
console.log("\n");
console.log(`🎉 🎉 🎉 🎉 🎉 `);