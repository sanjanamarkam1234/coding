/*(8). Write a javascript program to find GCD of three numbers.the GCD of two or more numbers is the largest
 number that divides each of them without leaving a remainder

Test cases
Input 1: a=3 , b=5 , c=7 
output: 1

Input 2: a=4, b=2, c=6
output: 2


Input 3: a=34, b=68 , c=17
output: 17

case:
Input: a = 2, b = 3, c = 5
Output: 1

case:
Input: a = 6, b = 9, c = 12
Output: 3

case of Three Numbers with Multiple Common Factors:
Input: a = 20, b = 30, c = 40
Output: 10

case of Three Numbers with No Common Factor:
Input: a = 8, b = 15, c = 21
Output: 1

case of Three Numbers with One Number as Zero:
Input: a = 0, b = 6, c = 9
Output: 3

case of Three Numbers with Two Numbers as Zero:
Input: a = 0, b = 0, c = 5
Expected Output: 5

case of Three Numbers with All Numbers as Zero:
Input: a = 0, b = 0, c = 0
Output: 0

Turn on screen reader support*/
const input = require("readline-sync");
let a = input.questionInt("Enter the  number: ");
let b = input.questionInt("Enter the  number: ");
let c = input.questionInt("Enter the  number: ");
let e, f, t, ab,abc;
if (a < b) 
{
    e = a + b;
    f = e - c;
    console.log(f);
}
if (a > c) 
{
    a = c - a;
    console.log(a);
}
let x = a, y = b;
while (y !== 0)
{
    t = y;
    y = x % y;
    x = t;
}
ab = x;

x = ab;
y = c;
while (y !== 0) 
{
    t = y;
    y = x % y;
    x = t;
}
abc = x;
console.log(abc);
