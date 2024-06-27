/* Chef promised that he would gift a pair of shoes (consisting of one left shoe and one right shoe) to each of his 
𝑁
N friends. Chef was about to go to the marketplace to buy shoes, but he suddenly remembers that he already had 
𝑀
M left shoes.

What is the minimum number of extra shoes that Chef will have to buy to ensure that he is able to gift a pair of shoes to each of his 
𝑁
N friends?

For example, if 
𝑁
=
2
N=2, 
𝑀
=
4
M=4, then Chef already has 
4
4 left shoes, so he must buy 
2
2 extra right shoes to form 
2
2 pairs of shoes.

Therefore Chef must buy at least 
2
2 extra shoes to ensure that he is able to get 
𝑁
=
2
N=2 pairs of shoes.

Input Format
The first line contains a single integer 
𝑇
T - the number of test cases. Then the test cases follow.
The first line of each test case contains two integers 
𝑁
N and 
𝑀
M - the number of Chef's friends and the number of left shoes Chef has.
Output Format
For each test case, output the minimum number of extra shoes that Chef will have to buy to ensure that he is able to get 
𝑁
N pairs of shoes.*/
const input = require("readline-sync");
let n = input.questionInt("enter the number :");
let arr = [];
let sum = 0;
let positive = 0;
let negative = 0;
let sumeven = 0;
let sumodd  = 0;
for(let i = 0; i<n; i++)
{
    arr[i] = input.questionInt("enter the number of size :")
}
console.log(arr); 
for(let i = 0; i<n; i++)
{
    if(arr[i] > 0)
    {
       positive = positive + arr[i];
    }
    else
    {
        negative = negative * arr[i];
    }
 if(arr[i] % 2 == 0)
    {
        sumeven += arr[i];
    }
    else
    {
         sumodd  += arr[i];
    }
}
console.log(" positive numbers", sum );   
console.log("negative numbers" , sum );   
console.log("even numbers", sumeven );   
console.log(" odd numbers",sumodd  );   