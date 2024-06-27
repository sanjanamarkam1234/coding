/*Imagine you have a list of numbers. You want to find out how long the longest run of the same number is.

For example, in the list [1, 2, 2, 3, 3, 3, 2, 2], the longest run of the same number is 3 (because the number 3 repeats three times in a row).

Input:
A list of numbers.

Output:
The length of the longest run of the same number in the list.

Testcase 1:
Input:
[1, 2, 2, 3, 3, 3, 3, 2, 2]
Output:
4
Explanation: The longest run is the four consecutive 3s.

Testcase 2:
Input:
[5, 5, 5, 3, 3, 4, 4, 4]
Output:
3
Explanation: Both 5 and 4 have the longest run of three each.

Testcase 3:
Input:
[1]
Output:
1

Turn on screen reader support
To enabl*/
const input = require("readline-sync");   
let n = input.questionInt("enter the array size:-");
let arr = [];
for (let i = 0; i <n; i++) {
   
     arr[i] = input.questionInt("enter  the no.");
    
}
console.log(arr);
let max =0;
let count =1;
for (let i = 0; i < n-1; i++)
{
   
   while(arr[i]==arr[i+1]) 
   {
      count++;
      i++;
   }
   if(count>max) 
   {
          max = count;
          count =1;
   } 
};

console.log("maximun diplicate no. is:",max);



