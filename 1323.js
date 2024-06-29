/*   1323. Maximum 69 Number */

/* 
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

Example 1:

Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.
Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
 

Constraints:

1 <= num <= 104
num consists of only 6 and 9 digits.

*/

// solution1

var maximum69Number = function (number) {
  let digits = [];

  while (number != 0) {
    digits.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  let ans = 0;
  let is6 = false;
  for (i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (digit == 6 && !is6) {
      digit = 9;
      is6 = true;
    }

    ans += digit * 10 ** (digits.length - 1 - i);
  }
  return ans;
};

console.log(maximum69Number(99966));

// solution2

var maximum69Number = function (number) {
  return +number.toString().replace("6", "9");
};
