
/*let x  = input.questionInt("enter the x: ")
let y = input.questionInt("enter the y:")
let t = input.questionInt("enter the total cost :")
let a = []
let i = 0;
sum = 0

while(i<n)
    {
        a[i] = input.questionInt("enter the number: ")
        i++;

    }
    i = 0;
    while(i<n)
        {
            if(a[i]<y)
                {
                 sum = sum+y-i
                 

                }
                else

                {
                  sum = sum+0
                }
                i++;
        } 
         sum = sum+x;
        console.log(sum);*/

// const { question } = require("readline-sync");

       /* const input = require("readline-sync");
        let num = input.questionInt("Enter the number of positive integers:");
        let arr = [];
        let sum = 0;
        let positiveSum = 0;
        let negativeSum = 0;
        let evenSum = 0;
        let oddSum = 0;
        for (let i = 0; i < num; i++) {
            arr[i] = input.questionInt("Enter a number: ");
        }
        
        console.log("Array:", arr);
        for (let i = 0; i < num; i++) {
            if (arr[i] >= 0) {
                positiveSum += arr[i];
            } else {
                negativeSum += arr[i];
            }
        
            if (arr[i] % 2 == 0) {
                evenSum += arr[i];
            } else {
                oddSum += arr[i];
            }
        }
        console.log("Sum of positive numbers:", positiveSum);   
        console.log("Sum of negative numbers:", negativeSum);   
        console.log("Sum of even numbers:", evenSum);   
        console.log("Sum of odd numbers:", oddSum); */ 

        // Input: Single line containing three space-separated integers
        /*const input = require("readline-sync");

let n = input.questionInt("Enter the number of elements: ");
let arr = [];

// Read the elements into the array
for (let i = 0; i < n; i++) {
  arr[i] = input.questionInt("Enter a number: ");
}

console.log("Original array:", arr);

// Create a new array to store the rearranged elements
let resultArr = new Array(n);
let evenIndex = 0;
let oddIndex = n - 1;

// Traverse the original array and place even numbers at the beginning and odd numbers at the end
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 === 0) {
    resultArr[evenIndex] = arr[i];
    evenIndex++;
  } else {
    resultArr[oddIndex] = arr[i];
    oddIndex--;
  }
}

// Reverse the odd numbers to maintain their original order
let left = evenIndex;
let right = n - 1;
while (left < right) {
  let temp = resultArr[left];
  resultArr[left] = resultArr[right];
  resultArr[right] = temp;
  left++;
  right--;
}

console.log("Modified array:", resultArr);*/

/*const input = require("readline-sync");
let n = input.questionInt("enter the ")
let a = input.questionInt("enter the frist");
let b = input.questionInt("enter the second");
let c = input.questionInt("enter the three");
let conunt = 0;
let total  = 0;
while(a> 0)
{
    if(grades!=0)
    {
        grades = Math.floor(total/3)
        grades = -1;
        continue;
    }

    if(conunt>0)
    {
        console.log("enter the number", grades);
    }
    else
    {
        console.log("not grades", conunt );
    }
}
console.log(grades,conunt);*/
/*const input = require("readline-sync");
let n = input.questionInt("enter the velues: ");
let conunt = 0;
let total  = 0;
let arr = [];
for(let j = 0; j<n; j++)
{
  let k =input.questionInt("enter the number of :");
  arr[j] = k;

}
 console.log(arr);
let average = 0
for(let i = 0; i<n ; i++){
  if (arr[i]>0) 
  {
    conunt++;
    console.log('next');
    total+= arr[i];         
  }
}
 average = Math.floor(total/conunt) ;
 console.log(average);*/
 /*const input = require("readline-sync");
function findletters(text) 
 {
   let word = text.split("");
   let c = 0;
   let s = 0;
   let r = 0;
   for (let i = 0; i < word.length; i++) {
     switch (word[i]) {
       case "a":
         c++;
         break;
       case "b":
         s++;
         break;
       case "c":
         r++;
         break;
 
       default:
         break;
     }
   }
 
   console.log("a", ":", c, "b", ":", s, "c", ":", r);
 }
 let text = input.question("enter a text : ");
 findletters(text);*/

// const input = require("readline-sync");


//  let string = input.question("Enter string:-");

//   let word = string.split(" ");
//   let count =0;

//   for(let i =0; i<word.length; i++){
//     for(let j = i+1; j<word.length; j++)
//       {
//          if (i === j) {
//            count++;
//          }
//       }
//        console.log(count);
//   }
//       let mostfrequently = 0;

//       if (count>mostfrequently) {
//             mostfrequently = count;
//             console.log(mostfrequently);
//       }

/*const input = require("readline-sync");

let string = input.question("Enter string: ");
let letters = string.replace(/\s+/g, '').split("");
let frequency = {};
for (let letter of letters) {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}
let mostFrequentLetter = letters[0];
let leastFrequentLetter = letters[0];

for (let letter in frequency) {
  if (frequency[letter] > frequency[mostFrequentLetter]) {
    mostFrequentLetter = letter;
  }
  if (frequency[letter] < frequency[leastFrequentLetter]) {
    leastFrequentLetter = letter;
  }
}
let result = string.split("").map(char => char === mostFrequentLetter ? leastFrequentLetter : char).join(" ");

console.log("Original string: ", string);
console.log("Most frequent letter: ", mostFrequentLetter, "with count:", frequency[mostFrequentLetter]);
console.log("Least frequent letter: ", leastFrequentLetter, "with count:", frequency[leastFrequentLetter]);
console.log("Modified string: ", result);*/

const input = require("readline-sync");
 let n = input.questionInt("enter the number of n:-");
 let s;

if (n <= 10000 ) 
{
    s = (n*0.05);
    console.log( s);
}

 else if (n>=10001 && n<=20000) 
{
    s =(n*0.1);
    console.log( s);
}

 else if  (n>=20001 && n<=30000) 
{
    s = (n*0.15);
    console.log( s);
}
else 
{
    s =(n*0.25);
    console.log(s);
}