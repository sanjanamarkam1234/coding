/*Given an array of size n, write a JavaScript program that performs the following operations:

Find and print the sum of all positive integers in the array.
Find and print the product of all negative integers in the array.
Determine and print the count of even integers in the array.
Determine and print the count of odd integers in the array.

Test Case 1:

Input: 
n = 7 
arr = [3, -5, 2, -7, 8, 0, 1]
Output:
Sum of positive integers: 14
Product of negative integers: -35
Count of even integers: 2
Count of odd integers: 4

Test Case 2:
n = 0
arr = []
Output:
Sum of positive integers: 0
Product of negative integers: 1
Count of even integers: 0
Count of odd integers: 0

Note: Assume the array and size of array are provided. Zero is even.

Empty array:
Input: []
Expected Output:
Sum of positive integers: 0
Product of negative integers: 1
Count of even integers: 0
Count of odd integers: 0

Array with only positive integers:
Input: [1, 2, 3, 4, 5]
Expected Output:
Sum of positive integers: 15
Product of negative integers: 1
Count of even integers: 2
Count of odd integers: 3

Array with only negative integers:
Input: [-1, -2, -3, -4, -5]
Expected Output:
Sum of positive integers: 0
Product of negative integers: -120
Count of even integers: 2
Count of odd integers: 3

Array with zero:
Input: [0]
Expected Output:
Sum of positive integers: 0
Product of negative integers: 1
Count of even integers: 1
Count of odd integers: 0

Array with both positive and negative integers:
Input: [2, -4, 6, -8, 10]
Expected Output:
Sum of positive integers: 18
Product of negative integers: 32
Count of even integers: 5
Count of odd integers: 0

Array with a single negative element:
Input: [-3]
Expected Output:
Sum of positive integers: 0
Product of negative integers: -3
Count of even integers: 0
Count of odd integers: 1

Array with multiple zero:
Input: [0,0,0]
Expected Output:
Sum of Find and print the sum of all positive integers in the array.
 integers: 0
Product of negative integers: 1
Count of even integers: 3
Count of odd integers: 0

Array with a single positive number:
Input: [4]
Expected Output:
Sum of positive integers: 4
Product of negative integers: 1
Count of even integers: 1
Count of odd integers: 0*/
/*const input = require("readline-sync");
let num = input.questionInt("Enter the number of positive integers:");
let arr = [];
let positive = 0;
let negative  = 0;
let even = 0;
let odd = 0;
let i = 0;
while(i<num)
{
    arr[i] = input.questionInt("enter the number of size : ")
    i++;
}
console.log(arr);
 i = 0;
while(i >= num)
{
   if(num >= 0)
    {
        sum = positive + arr[i]
        console.log(sum);
    }
    negative = sum + negative
}
if(num % 2 == 0)
{
    sum = even + sum
}
else
{
    odd = sum + odd
} 
i++;
console.log("Sum of positive numbers", positive );   
console.log("Sum of negative numbers" , negative );   
console.log("Sum of even numbers", even );   
console.log("Sum of odd numbers",odd  ); */  
const input = require("readline-sync");
let n = input.questionInt(`Enter the size of the array=`);
let numbers=[];
let sum=0;
let pro=1;
for(let i=0;i<n;i++)
    {
        numbers[i]=input.questionInt(`Enter the number`);
    }
    for(let i=0;i<numbers.length;i++)
        {
            if(numbers[i]>0)
                {
                    sum=sum+numbers[i];
                    ec++;
                }else{
                    pro=pro*numbers[i];
                    oc++;
                }
                if(arr[i] % 2 == 0 )
                   {
                      even = sum + arr[i];
                   } 
                   else
                   {
                      odd = sum + arr[i]
                   }
        }
        console.log(sum,pro,ec,oc);