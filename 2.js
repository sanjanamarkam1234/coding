/*Write a program that takes a positive integer as input and calculates the sum of the squares of its digits.

Input:
A positive integer.

Output:
The sum of the squares of the digits of the input integer.

Testcase 1:
Input:
123
Output:
14
Explanation: 1² + 2² + 3² = 1 + 4 + 9 = 14

Testcase 2:
Input:
99
Output:
162
Explanation: 9² + 9² = 81 + 81 = 162.

Testcase 3:
Input:
0
Output:
0

Testcase 4:
Input:
456
Output:
77
Explanation: 4² + 5² + 6² = 16 + 25 + 36 = 77.*/

const input = require("readline-sync");
let n = input.questionInt("enter the number :");

let sum = 0;
let s = 0;
while(n!=0)
{
       let d = n % 10;
        d = d*d;
        sum  += d;
        r = Math.floor(n/10)
        n = r;
}
console.log(sum);
