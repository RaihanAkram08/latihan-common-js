// Impor dengan {} (destructuring)
const { kali, bagi } = require('./utils/calculator');
const { capitalize } = require('./utils/stringUtils');

// Function Kali
console.log(kali(4, 4)); // Output: 16

// Function Bagi 
console.log(bagi(16, 4)); // Output: 4

// Function Capitalize
console.log(capitalize("javascript")) // Output: Javascript
