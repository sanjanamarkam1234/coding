/*Write a JavaScript program or code that takes three numbers as input. 
// If all three numbers are equal, print the product of the numbers. If any two numbers are equal, 
// add them together and print the remainder after dividing the sum by the third number. 
// If no two numbers are equal, determine the highest among them and print its square.

/ Test Cases:
Input: 2, 2, 2
Output: 8

Input: 3, 3, 5
Output: 1

Input: 6, 8, 4
Output: 64
*/

const input = require("readline-sync")
let a = input.questionInt("Enter 1st number: ");
let b = input.questionInt("Enter 2nd number: ");
let c = input.questionInt("Enter 3rd number: ");

if(a===b && b===c){
    let p = a * b * c
    console.log(p);
}else if(a===b){
    m = a+b
    g = m%c
    console.log(g);
}else if(a===c){
    m = a+c
    g = m%b
    console.log(g);
}else if(b===c){
    m = b+c
    g = m%a
    console.log(g);
}else if(a>b && a>c){
    s = a ** 2
    console.log(s);
}else if(b>c && b>a){
    s = b ** 2
    console.log(s);
}else if(c>b && c>a){
    s = c ** 2
    console.log(s);
}else{
    console.log("It doesn't have");
}
