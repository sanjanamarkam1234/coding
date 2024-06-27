const input = require("readline-sync");
let n = input.questionInt("enter the number :");
let arr = [];
let i = 0;
let count = 1;
while(i<n)
{
    arr[i] = input.questionInt("enter the number:")
    i++;
}
console.log(arr); 
let max = 0;
while(i<n)
{
    if(arr[i] == arr[i+1])
    {
        count++;
        i++;
    }
    if(count>max)
    {
        max = count
        count = 1
    }
    i++;
}
console.log("maximun diplicate no", max);

