const input = require("readline-sync");
let n = input.questionInt("enter the nuber:");
/*let arr = [];
let i = 0;
while(i<n)
{
    arr[i] = input.questionInt("enter the number:");
    i++;
}
console.log(arr);
let a ;
let sum = 0;*/
// Define the array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let average = sum / arr.length;
let f = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === average) {
        f = true;
        break;
    }
}
if (f) {
    console.log("YES");
} else {
    console.log("NO");
}
