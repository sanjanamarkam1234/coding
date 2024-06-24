const input = require("readline-sync");
let arr = ["munu","somu","exit","chunnu"];
let length = 4;
let i = 0;
let str = '';
while (i<length) 
{
    if(arr[i] == "exit")
        {
            break;
           
        }else{
            str += arr[i];
            str += ' '; 
        }
    
    i++;
}console.log(str);

