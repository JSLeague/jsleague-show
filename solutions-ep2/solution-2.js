/**
 *  reverse only half
 */

const checkPalindrome1 = (str) => [...(str.substring(0, Math.floor(str.length / 2)))].reverse().join("") === str.substring(Math.ceil(str.length / 2));//without case

console.log("Check palindrome with built-in functions  @ checkPalindrome1 @ \n");
console.log(`"roma summus amor" is a palindrome ->`, checkPalindrome1("roma summus amor"));
console.log(`"cojoc" is a palindrome ->`, checkPalindrome1("cojoc"));
console.log(`"anna" is a palindrome ->`, checkPalindrome1("anna"));
console.log(`"tar" is a palindrome ->`, checkPalindrome1("tar"));
console.log(`"tr" is a palindrome ->`, checkPalindrome1("tr"));
console.log(`"pp" is a palindrome ->`, checkPalindrome1("pp"));
console.log("@@@@@ add extra test cases");
console.log("\n");
