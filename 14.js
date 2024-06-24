/*write a JavaScript program that takes an array of integers as
 input and prints true if the array is a palindrome, and false otherwise.
  An array is considered a palindrome if it reads the same forwards and
 backwards. Implement the function without using any built-in methods.(20 marks)

Test Cases:
Input: [1,2,1]
Output: True

Input: [2,4,6,8,4,2]
Output: False

Input: [1,4]
Output: False

Input: [3,4,3,4]
Output: False
*/

const input = require("readline-sync");
let n = input.questionInt("Enter size of array: ");

let i = 0;
let arr = [];


while (i < n) 
{
    let arr = input.questionInt("enter the number");
    i++;
}
let Palindrome = true;
let s = 0;
let e = n - 1;

while (s < e) 
{
    if (arr[s] !== arr[e]) {
        Palindrome = false;
        break;
    }
    s++;
    e--;
}

console.log("Input array:", arr);
console.log("Output:", Palindrome);




// const input = require("readline-sync");
// let n = input.questionInt("Enter size of array: ");
// let arr = [];

// for (let i = 0; i < n; i++) 
// {
//     arr[i] = input.questionInt(`Enter element `);
// }
// let isPalindrome = true;
// let start = 0;
// let end = n - 1;

// while (start < end) 
// {
//     if (arr[start] !== arr[end]) {
//         isPalindrome = false;
//         break;
//     }
//     start++;
//     end--;
// }
// console.log("Input array:", arr);
// console.log("Output:", isPalindrome);