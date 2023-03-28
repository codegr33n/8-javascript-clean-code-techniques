// Techniques to writing clean javascript

// 1. Avoid duplicating context identifiers
/**
 * Reusing the same context identifier as the name for properties, especially when creating objects
 */

// define a school object
// XXXXXXX BAD PRACTICE 👎👎👎👎 XXXXXXX
const school = {
  schoolName: "whatever",
  schoolColor: "red",
  schoolWhatever: "we do not care",
};
// Accessing the properties
school.schoolName; // 👎👎👎👎
school.schoolColor; // 👎👎👎👎
/**
 * It is usually not a good idea to repeat the context name as the identifier for the properties
 */
// XXXXXXX GOOD PRACTICE 👍👍👍👍 XXXXXXX
const school2 = {
  name: "whatever",
  color: "red",
  whatever: "we do not care",
};
// Accessing the properties
school2.name; // 👍👍👍👍
school2.color; //👍👍👍👍

