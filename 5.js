// Techniques to writing clean javascript

// 5. Restrict Functions to doing just one thing 

// XXXXXXX BAD PRACTICE 👎👎👎👎 XXXXXX
function displayName() {
    // Creates user
    // Add user to db
    // Update user records
    // This is madness
}

// XXXXXXX GOOD PRACTICE 👎👎👎👎 XXXXXX 
function displayName2(name) {
    // logic to display name. Thats all
}

