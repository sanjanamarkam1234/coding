/*Alice and Bob are meeting after a long time. As usual, they love to play some math games. This time Alice takes the call and decides the game. The game is very simple, Alice says out an integer and Bob has to say whether the number is prime or not. Bob as usual knows the logic but since Alice doesn't give Bob much time to think, so Bob decides to write a computer program.

Help Bob accomplish this task by writing a computer program to calculate whether the number is prime.

Note that 1 is not a prime number.

Input
first line contains an integer N which has to be tested for primality.

Output
output in a separate line, "yes" if the number is prime else "no."

Constraints
1 ≤ T ≤ 20
1 ≤ N ≤ 100000

Testcase 1:
Input:
23
Output:
Yes

Testcase 2:
Input:
13
Output:
Yes

Testcase 3:
Input:
20
Output:
No*/
    const input = require("readline-sync")
    let n = input.questionInt("Enter number to check: ")
    
    let i = 2;
    let prime = "true";
    while(i<n)
    {
        if(n%i === 0)
        {
            prime = false;
            break;
        } 
        i++
    }
    console.log(prime);
    
    