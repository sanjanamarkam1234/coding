/*Each pizza consists of 4 slices. There are T friends and each friend needs exactly X slices.

Find the minimum number of pizzas they should order to satisfy their appetite.

Input Format:
Each test case consists of two integers N and X, the number of friends and the number of slices each friend wants respectively.

Output Format:
For each test case, output the minimum number of pizzas required.

Constraints:
1 ≤ N, X ≤ 10*/

const input = require("readline-sync");
let x = input.questionInt("Each pizza: ");
let t = input.questionInt("each friend: ");
let n =4;
q=x*t;
r=Math.ceil(q/4)
console.log(r);