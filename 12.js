/*Write a JavaScript program that takes a positive 
integer n as input. The program should print the sum of the
 squares of the first n natural numbers using a while loop.
Test Cases:
Input: 5
Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)

Input: 7
Output: 140 (1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2)

Input: 10
Output: 385 (1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 + 9^2 + 10^2)

case of Input of 0:
Input: 0
Output: 0

case of Negative Input:
Input: -5
Output: 0


case of Input of 1:
Input: 1
Output: 1*/

const input = require("readline-sync");
let n = input.questionInt("enter of element");
let sum = 0;
let i = 1;
let s = 0;
let r = 0;
// while (i<= n) 
// {
//     s= i+"^2";
//     console.log(s);
//     r=r+i*i
//     i++;
// }
// console.log(r);


while (i<=n) 
{
    sum = sum + i ** 2
    
    i++;
}
console.log(sum);