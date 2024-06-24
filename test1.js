/*const input = require("readline-sync");
let x = input.questionInt("enter the since:")
let y = input.questionInt("enter the line of point:")
if(x>0 && y>0)
{
    c = 1;
}
else if(x<0 && y>0)
{
    c = 2;
}
else if(x<0 && y<0)
{
    c = 3;
}
else if(x>0 && y<0)
{
    c = 4;
}
else
{
    c = 0;
}
console.log("since the point:", c);*/




/* 3. Given an array of integers, rearrange the array so that all even numbers come at the beginning and all odd numbers come at the end. Preserve the original order of the numbers.

Hint: You can use separate empty arrays to solve the problem.

Input:
An array of integers and the size of the array. (No need to take input, assume they are already provided)

Output:
A new array with all even numbers at the beginning and all odd numbers at the end, preserving the order of numbers.

Testcase 1:
Input:
let arr = [1, 2, 3, 4, 5, 6]
let n = 6
Output:
[2, 4, 6, 1, 3, 5]
Explanation: The even numbers 2, 4, and 6 are moved to the beginning, and the odd numbers 1, 3, and 5 are moved to the end, maintaining their original order.

Testcase 2:
Input:
let arr = [7, 8, 5, 6, 3, 4]
let n = 6
Output:
let arr = [8, 6, 4, 7, 5, 3]
Explanation: The even numbers 8, 6, and 4 are moved to the beginning, and the odd numbers 7, 5, and 3 are moved to the end, maintaining their original order.

Testcase 3:
Input:
let arr = [2, 4, 6, 1, 3, 5]
let n = 6
Output:
[2, 4, 6, 1, 3, 5]
Explanation: The even numbers 2, 4, and 6 are already at the beginning, and the odd numbers 1, 3, and 5 are already at the end, maintaining their original order.

Testcase 4:
Input:
let arr = [1, 3, 5, 7, 9, 0, 2, 4, 6]
let n = 9
Output:
[0, 2, 4, 6, 1, 3, 5, 7, 9]
Explanation: The even numbers 0, 2, 4, and 6 are moved to the beginning, and the odd numbers 1, 3, 5, 7, and 9 are moved to the end, maintaining their original order.

Testcase 5:
Input:
let arr = [11, -22, 33, 44, -55]
let n = 5
Output:
[-22, 44, 11, 33, -55]
Explanation: The even numbers -22 and 44 are moved to the beginning, and the odd numbers 11, 33, and -55 are moved to the end, maintaining their original order.*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let arr = [];
for (let i = 0; i < n; i++) 
{
    arr[i] = input.questionInt("number of rut:");
}
console.log(arr);
let even = [];
let odd = [];
for (let i = 0; i < n; i++) 
{
    if (arr[i] % 2 == 0) 
    {
        even[even.length] = arr[i];
    } else 
    {
        odd[odd.length] = arr[i];
    }
}
for (let i = 0; i < odd.length; i++) 
{
    even[even.length] = odd[i];
}
console.log(even);
