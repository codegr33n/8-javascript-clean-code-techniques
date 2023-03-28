// Techniques to writing clean javascript

// 6. Try to avoid using boolean flags for parameter names

// XXXXXXX BAD PRACTICE 👎👎👎👎 XXXXXX
function getCoursePrice(coursePrice, isStudent) {
  const STUDENT_DISCOUNT = 50;
  //   Logic continues
}

// XXXXXXX GOOD PRACTICE 👎👎👎👎 XXXXXX
/**
 * A better practise is to split the functions into two, one to get the price of the cost for students the other to get the price of the course for others
 */

function getCoursePriceForStudent(coursePrice) {
  const STUDENT_DISCOUNT = 50;
  //   Logic continues
}

function getCoursePriceForOthers(coursePrice) {
  const STUDENT_DISCOUNT = 50;
  //   Logic continues
}
