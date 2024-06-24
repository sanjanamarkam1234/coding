/*You have been asked to create a program to calculate the parking fee for a parking lot. The parking fee is based on how long a car has been parked. Here are the rules for calculating the fee:
- If a car is parked for up to 2 hours, the fee is ₹30 per hour.
- If a car is parked for more than 2 hours but less than or equal to 5 hours, the fee is ₹25 for the first 2 hours and ₹20 for each additional hour.
- If a car is parked for more than 5 hours, the fee is ₹25 for the first 2 hours, ₹20 for the next 3 hours, and ₹15 for each additional hour beyond 5 hours.

Write a JavaScript program that takes the number of hours a car has been parked as input and calculates the parking fee accordingly.

Test Case 1:
Input: 1
Expected Output: 30
Explanation: The car has been parked for 1 hour, so the fee is ₹30 per hour.

Test Case 2:
Input: 3
Expected Output: 70
Explanation: The car has been parked for 3 hours. For the first 2 hours, the fee is ₹25 per hour, and for the next hour, the fee is ₹20.

Test Case 3:
Input: 5
Expected Output: 110
Explanation: The car has been parked for 5 hours. For the first 2 hours, the fee is ₹25 per hour. For the next 3 hours, the fee is ₹20 per hour.

Test Case 4:
Input: 7
Expected Output: 140 
Explanation: The car has been parked for 7 hours. For the first 2 hours, the fee is ₹25 per hour. For the next 3 hours, the fee is ₹20 per hour. For the remaining 2 hours, the fee is ₹15 per hour.

Test Case 5:
Input: 2
Expected Output: 60

Test Case 6:
Input: 4
Expected Output: 90

Test Case 7:
Input: 10
Expected Output: 185*/
const input = require("readline-sync");
let hours = input.questionInt("Enter the number of hours: ");
let a,b,c;

if (hours <= 2)
{
    a = hours*30
    console.log(a);
    
}
else if (hours <= 5) 
{
    b = 2*25;
    b+= 20*(hours-2)
    console.log(b);
}
else 
{
    c = 2*25
    c+= 20*3
    c+= 15*(hours-5)
    console.log(c);
}