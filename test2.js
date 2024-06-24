/*Create a program that allows a teacher to enter student grades (integers from 0 to 100) repeatedly.
 The program should use -1 as a special value to indicate the end of the input. 
 Once the special value is entered, the program should calculate and display the average grade. Do not use arrays in your solution.

 Hint: How do you exit a loop early? (Think)

Input:
A sequence of integers representing student grades, each between 0 and 100. The input ends when the special value -1 is entered.

Output:
An integer representing the average grade of the entered grades.

Testcase 1:
Input:
85
92
78
-1
Output:
85
Explanation: The average of the grades 85, 92, and 78 is ((85 + 92 + 78) / 3 = 85).

Testcase 2:
Input:
100
90
80
70
60
-1
Output:
80
Explanation: The average of the grades 100, 90, 80, 70, and 60 is ((100 + 90 + 80 + 70 + 60) / 5 = 80).

Testcase 3:
Input:
-1
Output:
0
Explanation: No grades were entered, so the average is 0.

Testcase 4:
Input:
55
65
75
85
95
-1
Output:
75
Explanation: The average of the grades 55, 65, 75, 85, and 95 is ((55 + 65 + 75 + 85 + 95) / 5 = 75).

Testcase 5:
Input:
90
90
90
-1
Output:
90
Explanation: The average of the grades 90, 90, and 90 is ((90 + 90 + 90) / 3 = 90).*/

/*const input = require("readline-sync");
let n = input.questionInt("enter the velues: ");
let conunt = 0;
let total  = 0;
let arr = [];
for(let j = 0; j<n; j++)
{
  let k =input.questionInt("enter the number of :");
  arr[j] = k;

}
 console.log(arr);
let average = 0
for(let i = 0; i<n ; i++){
  if (arr[i]>0) 
  {
    conunt++;
    console.log('next');
    total+= arr[i];         
  }
}
 average = Math.floor(total/conunt) ;
 console.log(average);*/

const input = require("readline-sync");
let n = input.questionInt("enter the  number:");
let i = 0;
let sum = 0;
while(i<n)
{
  let a = input.questionInt("enter of");
  if(a!=-1)
  {
     sum = sum + a;
  }
  else
  {
     console.log(sum/[i]);
  }
  i++;
}
