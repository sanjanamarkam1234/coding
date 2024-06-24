/*write a JavaScript program that takes two arrays of integers as input. 
The program should find and print the common elements between the two arrays. The arrays have unique elements. 
Note: No need to take input for the arrays, assume the arrays are provided/hardcoded.

Test Cases:
Input: [2, 4, 6, 8], [4, 8, 12, 16]
Output: [4, 8]

Input: [1, 3, 5, 7], [7, 9, 11, 13]
Output: [7]

Input: [10, 20, 30], [40, 50, 60]
Output: []
*/
const input = require("readline-sync");
let n = input.questionInt("size of  array: ");
arr = [];
let i = 0;
while(i<n)
{
    let element=input.questionInt(`Enter element's  `)
    arr.push(element)
    i++
}
c = [];
i = 0;
while(i<n)
{
    let Element=input.questionInt(`Enter element's `)
    c.push(Element)
    i++
}

i=0
j=0
p = [];
k=0
while(i<n)
{
    if(arr[i] == c[j])
    {
        p[k]=arr[i]       
        j++
        k++
    }
    i++
}
    console.log(p);





    
    
    
    
    
    
        
    

    
