// Techniques to writing clean javascript

// 3. Use default arguments instead of short circuiting

//calculate discount
// XXXXXXX BAD PRACTICE 👎👎👎👎 XXXXXXX
function calculateDiscount(discount) {
  const productDiscount = discount || 10;
  //   logic continues
}
/**
 * The problem with this is that even if '0' was passed in as the discount, 10 would still be applied as discount even if we do not want any discount applied
 */
// XXXXXXX GOOD PRACTICE 👍👍👍👍 XXXXXXX
function calculateDiscount(discount = 10) {
  const productDiscount = discount;
  //   logic continues
}
