  /* 1. let length = 6;
 let arr = [16, 11, 4, 12, 15, 12];
let i = 0;
let j = 0;
 while(i<length - 1)
    {
        let j = 1;
        let s = 0;
        i = i +1;
    arr[i] = i +s % arr[i];
    }
    console.log(arr);

 /*2. let length = 5;
let arr = [6, 10, 14, 20, 5];
let i = 0;
let j = 1;
while(i<length)
    {
        let j = 0;
        let sum = 0;
        while(j<length)
            {
                sum = sum + arr[j]
                j++;
            }
            i = i + 3;
            arr[i] = sum % arr[i];
            console.log(arr[i+1]);
    }*/

 /* 3. let length = 5;
let arr = [3, 4, 5, 6, 7];
let result = 0;
let i = 0;
while(i<length)
    {
        if (i % 2 ==0)
            {
                result = result - arr[i];
            }
            else
            {
                result = result * arr[i]
            }
            i++;
    }
    console.log(result);*/

 /* 4. let length = 5;
let arr = [31, 21, 41, 31, 11];
let i = 0;
let j = 1;
while(i<length && j<length)
    {
        if(arr[i]> arr[j])
            {
                arr[i] = arr[i] % arr[j];
            }
            i++;
            j++;
    }
    console.log(arr[i]);*/

 /*let length = 10;
let arr = [5, 10, 15, 20 ,25, 30, 35, 40, 45, 50];
let sum = 0;
let index = 0;
while (index < length) 
{
    if (index % 3 == 0) 
    {
        sum = sum + arr[index]
    }
    index = index + 1;
}
console.log(sum);*/

/* 7. let size = 4;
let number = [10, 20, 30, 40];
number[3] = number[2] - number[1];
console.log(number);*/

/* 8. let numbers = [5,9,14,20,25 ];
if (numbers[1] >10)
{
    console.log("Element at index 1 is greater than 10");
}
else
{
    console.log("Element at index 1 is less than or equal to 10");
}*/

/* 9.let sum = 0;
let i = 1;
while(i<5)
    {
        sum = sum + i;
        i = i + 3;
        console.log(sum);
    }*/

/* 10. let s = 16;
 while(s>0)
{
   if(s % 3 == 0 && s % 6 == 0)
   {
     console.log(s);
     s = s -1
    }
    else if(s % 4 == 0)
    {
         s = s - 2;
    }
    else
    {
        s = s -1;
    }
}*/

/* 11. let i = 1;
let j = 5;
while(i<2*1)
    {
        while(j < 3 * 3)
            {
                console.log(j+i);
                j++;
            }
            i++;
    }*/

  /*let i = 1;
  let j = 2; 
  while( i <= 4)
    {
        while( j <= 5)
            {
                if( i== j>1)
                    {
                        break;
                    }
                console.log( i * j);
                j++;
            }
         i++;
            
      }*/
   
         /*let sum = -5;
         let i = 1;
         while(i<5)
            {
                sum = sum + i;
                i++;
            }
            console.log(sum);*/

            /*const input = require("readline-sync");
            let n = input.questionInt("enter the number :");
            let arr = [1,3,5,7,4];
            let i = 0; 
            let av = 0;
            let count = 0; 
            let sum = 0;
            let even = 0;
            let odd = 0;
            let pro = 1;
             while(i<n) 
                {
                    let b = input.questionInt("enter the number:");
                    arr[i] = b;
                    i++;
                }
                console.log(arr);
               while(i<arr.length)
                {
                    count = count + 1;
                    sum = sum + arr[i];
                    pro = pro + arr[i];
                      
                    if(arr[i] % 2 ==0)
                        {
                            evensum += arr[i];
                        }   
                        else
                        {
                            oddsum += arr[i];
                        }
                }
                i++;
                av = sum / count;
                console.log();*/
                
/*const input = require("readline-sync");
let n = input.questionInt("enter the number");
let i = 0; j = 1;
let arr = [];
while(i<arr.lrngth)
    {
        let b = input.questionInt("enter the element")
        arr[i] = b
    }
    console.log(arr);
    let c = 0;
    while(j<b)
        {
            if(b % j == 0)
                {
                    c++;
                }
                j++;
        }
console.log(sum, even, odd);*/


 /*const input = require("readline-sync");
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
    }*/

/*let length = 6;
let arr =  [10, 20, 30, 40, 50, 60]
let i = 0;
while(i<length)
    {
        if(i % 2 ==0)
            {
                arr[i] = arr[i] + arr[i +1];
            }
            else 
            {
                if (arr[i] > 25)
                    {
                        arr[i] = arr[i] - 10;
                    }
                    else
                    {
                        arr[i] = arr[i] + 10;
                    }
            }
            i++;
    }
    console.log(arr);*/
/*let length  = 7;
let arr = [14, 8, 28, 22, 44, 36,18]
let i = 0;
let j =1;
let k = 3;
while(i< length)
    {
        if(j<length)
        {
           if(arr[i] % arr[j] == 0)
            {
                arr[i] = Math.floor(arr[i] / arr[j])
            }
            else
            {
                arr[i] = arr[i] + arr[j]
            }
            if(k,length)
                {
                    if(arr[j] > arr[k])
                        {
                            arr[j] = arr[j] - arr[k]
                        }
                        else
                        {
                            arr[j] = arr[j] + arr[k]
                        }
                        k = k + 3;
                }
                j = j +2;
        }
        i = i + 3;
    }
    console.log(arr[4]);*/
/*let x = 12;
while(x>3)
    {
        console.log(x);
        x = x - 4;
    }*/


/*let i = 1;
let j = 1;
while(i<=2)
{
    while(j<=3)
    {
       if(i+j>2)
        {
            break;
        }
        console.log(i*j);
        j++;
    }

    i++;
}*/
/*let s = 15;
while(s>0)
{
    if(s%3==0)
    {
        if(s%5==0)
        {
            console.log(s);
            s=s-4;
        }
        else
        {
            console.log(s);
            s=s-2;
        }
        s=s-1;
    }
}*/

let sum = 0;
let i = 3;
while(i<9)
{
    sum = sum +i;
    i = i+2;
    console.log(sum);
}