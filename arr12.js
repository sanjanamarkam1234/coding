/*Kalyani has some students in her coding class who are practicing problems. 
Given the difficulty of the problems that the students have solved in order, help Kalyani identify if they are solving them in non-decreasing order of difficulty. 
Non-decreasing means that the values in an array are either increasing or remaining the same, but not decreasing. 
That is, the students should not solve a problem with difficulty d1, and then later a problem with difficulty d2, where d1 > d2.


Output “Yes” if the problems are attempted in non-decreasing order of difficulty rating and “No” if not.


Input Format

The first line of input will contain a single integer T, denoting the number of test cases. The description of the test cases follows.

Each test case consists of 2 lines of input.

The first line contains a single integer N, the number of problems solved by the students.

The second line contains

 N space-separated integers, the difficulty ratings of the problems attempted by the students in order.


Output Format

For each test case, output in a new line “Yes” if the problems are attempted in non-decreasing order of difficulty rating and “No” if not.
 The output should be printed without the quotes.

Each letter of the output may be printed in either lowercase or uppercase.
 For example, the strings yes, YeS, and YES will all be treated as equivalent.


 Constraints

1 ≤ T ≤ 100

2 ≤ N ≤ 100

1 ≤ difficulty of each problem ≤ 5000



Testcase 1:

Input:

3

1 2 3

Output:

Yes


Testcase 2:

Input:

3

1 1 2

Output:

Yes


Testcase 3:

Input:

5

100 200 300 400 350

Output:

No



Explanation:

Test case 1:

1 ≤ 2 ≤ 3. The students have solved problems in increasing order, and so the answer is "Yes".


Test case 2:

1 ≤ 1 ≤ 2. The students have solved problems in non-decreasing order, and so the answer is "Yes".
Test case 3:
400 > 350, but the students have solved a 400-difficulty level problem before solving a 350-difficulty problem. 
The students have not solved problems in non-decreasing order, and so the answer is "No".
Test case 4:
5000 > 3000, but the students have solved a 5000-difficulty level problem before solving a 3000-difficulty problem. 
The students have not solved problems in non-decreasing order, and so the answer is "No".*/
const input=require('readline-sync')
let arr=[];
let N=input.questionInt(`Enter the total number of the element=`);
let i=0;
let ans="Yes";
while(i<N)
    {
        arr[i]=input.questionInt(`Enter the element no`);
        i++;
    }
    i=0;
    while(i<arr.length-1)
        {
         if(arr[i]>arr[i+1])
            {
            ans="No";
            break;
            }
            i++;
        }
        console.log(ans);