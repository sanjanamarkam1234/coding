/*Chef visited a grocery store for fresh supplies. 
There are N items in the store where the ith item has a freshness value Ai and cost Bi.
 Chef has decided to purchase all the items having a freshness value greater than or equal to X. 
 Find the total cost of the groceries Chef buys.

Input Format:
The first line of each test case contains two space-separated integers N and X — the number of items and the minimum freshness value an item should have.
The second line contains N space-separated integers, the array A, denoting the freshness value of each item.
The third line contains N space-separated integers, the array B, denoting the cost of each item.

Output Format:
For each test case, output on a new line, the total cost of the groceries Chef buys.
 
Constraints:
1 ≤ T ≤ 100
1 ≤ N, X ≤ 100
1 ≤ Ai, Bi ≤ 100


Testcase 1:
Input:
2 20
15 67
10 90
Output:
90

Testcase 2:
Input:
3 1
1 2 3
1 2 3
Output:
6

Testcase 3:
Input:
3 100
10 90 50
30 7 93
Output:
0*/
const input = require("readline-sync");
let n = input.questionInt("enter the number :");
let x = input.questionInt("enter the num:")
let i = 0; j = 0;
let arr = [];
let b = [];
let sum = 0;
while(i<n)
   {
      arr[i] = input.questionInt("freshness value ")
      b[i]   = input.questionInt("cost of the groceries: ");
      i++;
   }
   i = 0;
   while(i<n)
      {
         while(arr[i] >= x)
            {
                 sum = sum + b[i]
               i++;
            }
            i++;
      }
      console.log(sum);