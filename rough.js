/*const input=require('readline-sync')
let arr=[];
let N=input.questionInt(`Enter the total number of the element=`);
let i=0;
let ans="Yes";
while(i<N)
    {
        arr[i]=input.questionInt(`Enter the element no`);
        i++;
    }
    i=0;
    while(i<arr.length-1)
        {
         if(arr[i]>arr[i+1])
            {
            ans="No";
            break;
            }
            i++;
        }
        console.log(ans);*/

        /*let length = 5;
        let arr = [6,10,14,20,5];
        let i =0;
        let j = 1;
        while(i < length -1)
            {
                let j = i;
                let sum = 0;
              while( j < length )
                {
                    sum  = sum + arr[j]
                    j = j + 2;
                }
                i = i + 3;
                arr[i] = sum % arr[i];
                console.log(arr[i + 1]);
            }*/

 /*const input = require("readline-sync");
 let n = input.questionInt("enter the number");
 let i = 0; arr = [];
 while(i<n)
    {
        arr[i] = input.questionInt("enter of element")
        i++;
    }
    console.log(arr);
    let dist = 0; 
    let number = arr[0]; 
    while(number>0)
        {
            number = Math.floor(number/10)
            dist = dist + 1;
        }
    let  p = 0;
     let tem = arr[0];
    let c ;
    while(tem > 0)
        {
            c = tem % 10
            p = p+c**dist
            tem = Math.floor(tem/10)
           
        }
    if(arr[i] === p)
        {
            console.log("amstrong number");
        }
        else
        {
            console.log("not a amstrong number");
        }*/


/*const input = require("readline-sync");
 let n = input.questionInt("enter the number:");
 let arr = [];
 let i = 0;
 while(i<n)
    {
        arr[i] = input.questionInt("enter of element:")
        i++;
    } 
    console.log(arr);
    for(let i = 0; i < arr.length; i++)
    {
        let sum = 0;
        let a = 1;
        while(a < arr[i])
        {
            if(arr[i] % a == 0)
            {
                sum = sum + a;
            }
            a++;
        }
        if(sum == arr[i])
        {
            console.log(arr[i],"is a perfect number");
        }
        else
        {
            console.log(arr[i],"is not a perfect number");
        }
    }*/

       /* const input = require("readline-sync");
        let num = input.questionInt("Enter the number of positive integers:");
        let arr = [];
        
        let positiveSum = 0;
        let negativeSum = 0;
        let evenSum = 0;
        let oddSum = 0;
        let i = 0;
        
        while (i < n) 
        {
            let num = input.questionInt("Enter a number:");
            arr[i] = num;
        
            if (n >= 0) 
            {
                positivesum += num;
            } else 
            {
                negativesum += num;
            }
        
            if (num % 2 === 0) 
            {
                evensum += num;
            } else 
            {
                oddsum += num;
            }
            i++;
        }
        console.log("Array:", arr);
        console.log("Sum of positive numbers:", positivesum);
        console.log("Sum of negative numbers:", negativesum);
        console.log("Sum of even numbers:", evensum);
        console.log("Sum of odd numbers:", oddsum);*/
        
        
const input = require("readline-sync");
let n = input.questionInt("enter the num:");
let sum = 0;
let conunt = 0;
let i = 0;
while(i<n)
{
 let a=input.questionInt(`Enter the number=`);
 if(a!=-1)
    {
        sum+=a;
    }else{
        console.log(sum/(i));
    }
    i++;
}
