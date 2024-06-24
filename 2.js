const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
let i = 1;
while (i <= n) 
{
    if(i<=50)
    {
       console.log(i);
       i++;
    
    }
    else
    {
       break;
        
    }
}
console.log(i);