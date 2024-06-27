/*There are two exits in a bus with 100 seats:

First exit is located beside seat number 1.
Second exit is located beside seat number 100.
Seats are arranged in a straight line from 1 to 100 with equal spacing between any 2 adjacent seats.

A passenger prefers to choose the nearest exit while leaving the bus.
Determine the exit taken by passenger sitting on seat X.


Input Format
Each test case consists a single integer X, denoting the seat number.

Output Format
For each test case, output LEFT if the passenger chooses the exit beside seat 1, RIGHT otherwise.

You may print each character of the string in uppercase or lowercase (for example, the strings LEFT, lEft, left, and lEFT will all be treated as identical).
Constraints

1 ≤ T ≤ 100

1 ≤ X ≤ 100


Testcase 1:
Input:
50
Output:
LEFT


Testcase 2:
Input:
100
Output:
RIGHT


Testcase 3:
Input:
30
Output:
LEFT


Testcase 4:
Input:
51
Output:

RIGHT*/

const input = require("readline-sync");
let n = input.questionInt("enter the number :")
if(n<=50)
    {
        console.log(" left :");
    }
    else
    {
        console.log(" rigth");
    }
