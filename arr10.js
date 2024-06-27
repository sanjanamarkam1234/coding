/*Samantha is saving money for a new bicycle. Each week, she spends S rupees amount from her pocket money and receives a pocket money of A rupees amount from her parents weekly.
 She wants to determine how many weeks it will take for her to save enough money to buy the bicycle, which costs C rupees.

Write a program to help Samantha calculate the number of weeks needed to save enough money for the bicycle.

Input:
The input consists of three integers separated by spaces:
The first integer, C represents the cost of the bicycle.
The second integer, S represents the amount Samantha spends each week from her pocket money.
The third integer, A represents Samantha's weekly pocket money from her parents.

Output:
a single integer representing the number of weeks needed for Samantha to save enough money to buy the bicycle.


Test Case 1:
Input: 1000 50 200
Output: 7

Testcase 2:
Input: 1500 200 300
Output: 15

Test case 3:
Input: 2000 150 200
Output: 40:

Test Case 4:
Input: 1000 50 300
Output: 4

Testcase 5:
Input: 1500 100 300
Output: 8

Test case 6:
Input: 2000 100 200
Output: 20:


Test Case 7:
Input: 2000 50 200
Output: 14

Testcase 8:
Input: 3500 100 300
Output: 18*/

/*const input = require("readline-sync");
let S = input.questionInt("Enter the samantha: ");
let A = input.questionInt("Enter the samantha: ");
let C = input.questionInt("Enter the cost : ");
let snj=C-A;
let result=Math.round(S/snj);
console.log(result);*/

const input = require("readline-sync");
 let c = input.questionInt(" enter the cost:");
 let s = input.questionInt(" enter the spent:");
 let a = input.questionInt(" enter the ");
 let rut = a - s;
 let vru = Math.floor(c/rut)
if(c % vru == 0)
    {
        console.log(vru);
    }
    else
    {
        console.log(vru+1);
    }