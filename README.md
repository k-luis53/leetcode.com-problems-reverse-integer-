# leetcode.com-problems-reverse-integer-
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

solution for the reverse problem:
This is the first version of the code; it works but i don't think it is the best way to do it
Here is how it works: 
1: it take the x of type number as input turn it into an array of number (example: 123 -> [1, 2, 3, 4])
2: then it reverse the order of all the values in that array then join them(example:[1, 2, 3, 4] -> [4, 3, 2, 1] -> 4321)
3: if the reverse number cause an integer overflow meaning that it exceed 2^31 - 1 = 2147483647 it will return 0
4: if x is a negative number if will turn x into a possitive and then do all the 1 2 3 steps and return -result

okay the second version is a lot better: example x is -123
first you check if the the x number if negative or not (true)
then you get the absolute value of x (123) and the rest is like the first version
(123 -> '123' -> ['1', '2', '3'] -> [1, 2, 3] -> [3, 2, 1] -> 321)
if reverseNum cause an integer overflow (result > 2147483647 return 0)
then if the number x is negative(true) return -result(-321) else return result


