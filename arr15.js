/*There are N items in a shop. You know that the price of the i-th item is Ai. Rithesh wants to buy all the N items.

There is also a discount coupon that costs X rupees and reduces the cost of every item by Y rupees.
 If the price of an item was initially less than or equal to Y, it becomes free, i.e., costs 0.

Determine whether Rithesh should buy the discount coupon or not.
 Rithesh will buy the discount coupon if and only if the total price he pays after buying the discount coupon is strictly less than the price he pays without buying the discount coupon.

Input Format
The first line  contains three space-separated integers — N, X, and Y.
The second line contains N space-separated integers — A1, A2, …, AN.

Output Format
For each test case, output COUPON if Rithesh should buy the discount coupon, and NO COUPON otherwise.
Each letter of the output may be printed in either lowercase or uppercase.
 For example, the strings coupon, CouPoN, and COUPON will all be treated as equivalent.

Constraints
1 ≤ T ≤ 1000
1 ≤ N ≤ 100
1 ≤ X, Y ≤ 10^5
1 ≤ Ai ≤ 10^5

Testcase 1:
Input:
4 30 10
15 8 22 6

Output:
COUPON

Testcase 2:
Input:
4 40 10
15 8 22 6
Output:
NO COUPON

Testcase 3:
Input:
4 34 10
15 8 22 6
Output
NO COUPON

Explanation:
Test case 1: The original cost of the items is 15 + 8 + 22 + 6 = 51.
 Buying the coupon costs 30, and after buying it, the cost of buying all the items is 5 + 0 + 12 + 0 = 17. 
 The total cost of buying everything with the coupon is 30 + 17 = 47, which is strictly less than 51. So, Chef will buy the coupon.
Test case 2: The original cost of the items is 15 + 8 + 22 + 6 = 51.
 Buying the coupon costs 40, and after buying it, the cost of buying all the items is 5 + 0 + 12 + 0 = 17. 
The total cost of buying everything with the coupon is 40 + 17 = 57, which is more than 51. So, Chef will not buy the coupon.*/
const input = require("readline-sync");
let n = input.questionInt("enter the size:");
let x = input.questionInt("enter the number of x:");
let y = input.questionInt("enter the num y:");
let totalprice = 0;
let i = 0;
let sum = 0;
let arr = [];
while(i<n)
    {
        arr[i] = input.questionInt("enter of the valuse :");
        i++;
    }
    console.log(arr);
i = 0;
while(i<n)
    {
        totalprice = totalprice + arr[i] 
        if (arr[i]> y) 
        {
            sum = sum + arr[i]-y;
            i++;
        }
        
         i++;
    }
    let p = sum+x;
     
    console.log(p);
    if(totalprice > p)
        {
            console.log(" coupon");
        }
        else
        {
            console.log("no coupon");
        }