/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not,
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;

  // Edit between these lines
  // =================================
  result = a + b;

  // =================================

  return result;
}

// console.log(troubleshooting());

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 *
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

number = "3";

function numberChecker() {
  if (+number >= 10) {
    return true;
  } else {
    return false;
  }
}

// console.log(numberChecker(5));

/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = 1 + 8; // "one plus eight"
const b = 22 * 3; // "22 times three"
const c = 5 % 4; // "the *remainder* of 5/4";
const d = a - 17; // "the variable 'a' minus 17";
const e = a + b + c + d; // "the sum of the previous four variables";
