/*The chef visited a grocery store for fresh supplies.
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

Testcases:
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
0

Explanation:
Testcase 1: 
Only the 2nd item has a freshness value (67) greater than X (20), and the cost is 90.

Testcase 2: 
All the items have a freshness value greater than or equal to X (1), hence we add all the costs: 1 + 2 + 3 = 6

Testcase 3:
None of the items has a freshness value greater than or equal to X (100), hence the total is 0*/


const input = require("readline-sync");
let n = input.questionInt("enter the number;-");
let arr = [];
let i = 0;
while (i<n) 
{
    arr[i] = input.questionInt("enter the num")
    i++;
}
c = [];
i = 0;
while(i<n)
{
    let Element=input.questionInt(`Enter element's `)
    i++
}
i=0
j=0
p = [];
k=0
while(i<n)
{
    if(arr[i] == c[j])
    {
        p[i]=arr[k]       
        j++
        k++
    }
    i++
}
    console.log(p);
