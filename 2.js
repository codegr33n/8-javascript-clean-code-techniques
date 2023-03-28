// Techniques to writing clean javascript

// 2. Avoid magic numbers
/**
 * A magic number is a value with an unexplained meaning/ it makes no sense
 */

// check password length
// XXXXXXX BAD PRACTICE 👎👎👎👎 XXXXXXX
if (password.length < 6) {
  // Logic goes here
}
/**
 * The literal '6' makes no sense hence a magic number🔮, a better way is to store the 6 in a constant with a descriptive identifier for what the '6' is about
 */
// XXXXXXX GOOD PRACTICE 👍👍👍👍 XXXXXXX
const MIN_PASSWORD_LENGTH = 6;
if (password.length < MIN_PASSWORD_LENGTH) {
  // Display vawulence😁
}

// Example 2:
// Print days of the week
// XXXXXXX BAD PRACTICE 👎👎👎👎 XXXXXXX
for (let i = 0; i < 7; i++) {
  // Logic
}
// XXXXXXX GOOD PRACTICE 👍👍👍👍 XXXXXXX
const DAYS_OF_THE_WEEK = 7;
for (let i = 0; i < DAYS_OF_THE_WEEK; i++) {
  // logic
}
