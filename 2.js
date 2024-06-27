/*Alice and Bob are playing a game. Each player rolls a regular six-faced dice 3 times. 
The score of a player is the sum of the values of the highest 2 rolls.
 The player with the highest score wins, and the game ends in a Tie if both players have the same score.

Input Format
Each test case contains six space-separated integers A1, A2, A3, B1, B2, and B3 — the values Alice gets in her 3 dice rolls, followed by the values that Bob gets in his 3 dice rolls.

Output Format
For each test case, output on a new line Alice if Alice wins, Bob if Bob wins and Tie in case of a tie.

Note that you may print each character in uppercase or lowercase. For example, the strings tie, TIE, Tie, and tIe are considered identical.

Constraints

1 ≤ T ≤ 10^4
1 ≤ A1, A2, A3, B1, B2, B3 ≤ 6



Testcase 1:
Input:
3 2 5 6 1 1
Output:
Alice

Testcase 2:
Input:
4 4 5 6 4 1
Output:
Bob

Testcase 3:
Input:
6 6 6 6 6 1
Output:
Tie*/

const input = require("readline-sync");
let a1 = input.questionInt("Enter the first number of the first set: ");
let a2 = input.questionInt("Enter the second number of the first set: ");
let a3 = input.questionInt("Enter the third number of the first set: ");
let b1 = input.questionInt("Enter the first number of the second set: ");
let b2 = input.questionInt("Enter the second number of the second set: ");
let b3 = input.questionInt("Enter the third number of the second set: ");
if(a1>a2)
    {
        max = a1
        min = a2
    }
    else
    {
        max = a2
        min = a1
    }
    if(min>a3)
        {
            max1 =min
        }
        else
        {
            max1 = a3
        }
        sum = max1 + max
if(b1>b2)
    {
        max2 = b1
        min2 = b2
    }
    else
    {
        max2 = b2
        min2 = b1
    }
    if(min2>b3)
        {
            max3 =min2
        }
        else
        {
            max3 = b3
        }
        sum2 = max3 + max2

        if(sum > sum2)
            {
                console.log("alice is winner");
            }
           else if(sum === sum2)
            {
                console.log("tie");
            }
            else
            {
                console.log("bob is winner");
            }
