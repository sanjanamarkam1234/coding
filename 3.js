const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
let i = 1;
while (i < n) 
{
    if(i<10)
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


// const input = require("readline-sync");
// let n = input.questionInt("enter the number;-");
// let arr = [];
// let i = 0; sum =0;
// while (i<n)
//     {
//         arr[i] = input.questionInt("enter of alice")
//         i++;
//     }
//         i = 0;
//         while (i < n) 
//         {
//             if (arr[i] === n) 
//             {
//                 sum += arr[i];
//             }
//             i++; 
//         }
//         console.log("sum of the element ",sum);
//         console.log("alice");
//         console.log("bob");
//         console.log("tit");


