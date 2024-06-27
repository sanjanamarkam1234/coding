/*(21). You are given a positive integer N and an array of integers.
 Write a program to print the sum of the first N elements of the array.

Input:
The input consists of a single positive integer N (1 ≤ N ≤ length of the array, which is ≤ 10^5) and an array of length L. 
Each element of the array is in the range [-10^6, 10^6].

Output:
Output a single integer representing the sum of the first N elements of the array.

Testcase 1:
Input:
3  5
10, -5, 8, -3, 2
Output:
13

Testcase 2:
Input:
4  4
-2, -4, -6, -8
Output:
-20

Testcase 3:
Input:
1
1000
Output:
1000

Testcase 4:
Input:
3  5
10, 12, 18, -3, 2
Output:
40

Testcase 5:
Input:
3  4
12, -4, -6, -8
Output:
2

Testcase 6:
Input:
1  2
1000 300
Output:
1000


Testcase 7:
Input:
2  5.
10, -5, 8, -3, 2
Output:
5*/

const input = require("readline-sync");
let n = input.questionInt("enter the number: ");
let p = input.questionInt("enter the value: ");
let arr = [];
let i = 0; s= 0;
while (i<n) 
{
    arr[i] = input.questionInt("enter the elements: ");
    i++;
}
console.log(arr);

i=0;
while (i<p) 
{
    s += arr[i];
    i++;
}
console.log(s);
 