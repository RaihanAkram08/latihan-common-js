// Import individu (Tidak dapat menggunakan destructuring)
const tambah = require('./mathOperations');
const kurang = require('./mathOperations');
const kali = require('./mathOperations');

// Function Tambah
console.log(`hasil dari 10 + 8 adalah ${tambah(10, 8)}`); // Output: hasil dari 10 + 8 adalah 18

// Function Kurang
console.log(`hasil dari 30 - 19 adalah ${kurang(30, 19)}`); // Output: hasil dari 30 - 19 adalah 11

// Function Kali
console.log(`hasil dari 8 * 3 adalah ${kali(8, 3)}`); // Output: hasil dari 8 * 3 adalah 24