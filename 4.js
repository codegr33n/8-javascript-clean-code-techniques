// Techniques to writing clean javascript

// 4. Restrict function arguments to three

// This is not to say, you should not pass in all the arguments your functon needs, rather a good practise is to pass in one/two core areguments and the rest as an options objects, you might have seen this in some libraries you use

// toast library
const options = {
  // all the other argumets are passed as properties of this object
};
// XXXXXXX GOOD PRACTICE 👍👍👍👍 XXXXXXX
toast("hey", options);

// XXXXXXX BAD PRACTICE 👎👎👎👎 XXXXXXX
toast2('hello', 'red', '100px', '50px', 'mango', 'bulaba', 'ok stop', '...')