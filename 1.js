/*const input = require('readline-sync')
let U = input.questionInt("enter U ");
if(U<=50){
    B=U*0.50
    S=B*20/100
    T=B+S
    console.log(T)
}
if(U<=150){
    B=(U*0.50)+(U-50)*0.75
    S=B*20/100
    T=B+S
    console.log(T)
}
if(U<=250){
    B=100+(U-150)*1.20
    S=B*20/100
    T=B+S
    console.log(T)
}else{
    B=220+(U-250)*1.50
    S=B*20/100
    T=B+S
    console.log(T)
}*/

/*Electricity Bill Calculation
Write a program that takes an integer representing the number of units consumed and calculates the total electricity bill based on the following slab rates:

For the first 50 units: ₹3 per unit
For the next 100 units (51-150): ₹5 per unit
For the next 100 units (151-250): ₹8 per unit
For units above 250: ₹10 per unit

Input:
An integer representing the number of units consumed.

Output:
An integer representing the total electricity bill.

Testcase 1:
Input:
30
Output:
90
Explanation:
The first 50 units are charged at ₹3 per unit, so 30 units cost 30 * 3 = ₹90

Testcase 2:
Input:
150
Output:
650
Explanation:
First 50 units: 50 * 3 = ₹150
Next 100 units: 100 * 5 = ₹500
Total: 150 + 500 = ₹650.


Testcase 3:
Input:
300
Output:
1950
Explanation:
First 50 units: 50 * 3 = ₹150
Next 100 units: 100 * 5 = ₹500
Next 100 units: 100 * 8 = ₹800
Remaining 50 units: 50 * 10 = ₹500
Total: 150 + 500 + 800 + 500 = ₹1950*/

const input = require("readline-sync");
let  u = input.questionInt("enter the number:");
let b = 0;
if (u<=50)
    {
         b = u*3;
    }
else if(u<=150)
    {
        b = (50*3)+(u-50) * 5;
    }
else if(u<=250)
    {
        b = (50*3) + (100 + 5) + (u - 150 * 8)
    }
    else
    {
       b = (50*3)+(100*5) + (100*8)+(u - 250 ) * 10;
    }
    console.log(b);
