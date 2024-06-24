/*const input = require("readline-sync");
let n = input.questionInt("enter the the number of element:-");
let array = [];
for(let i = 0; i<n; i++ )
{
     array[i] = input.questionInt("enter element ")

}
for(let i=0;i<array.length;i++)
    {
        if(array[i]>0)
            {
                console.log(array[i]);
                break;
            }
    }*/

    const input = require("readline-sync");
let number = input.questionInt("Enter the number: ");
let prime = true;

if (number <= 1) {
    prime = false;
} 
else 
{
    for (let i = 2; i <= Math.sqrt(number); i++) 
    {
            if (number % i === 0) 
            {
                prime = false;
                break;
            }
    }
}

if (prime) 
{
    console.log(number + " is a prime number");
} else
{
    console.log(number + " is not a prime number");
}

