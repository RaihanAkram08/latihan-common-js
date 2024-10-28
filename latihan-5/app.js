// Impor dengan {} (destructuring)
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./conversion');
const kuadrat = require('./mathUtil');

// Konversi 30 derajat dari Celsius ke Fahrenheit.
const converseCelsiusToFahrenheit = celsiusToFahrenheit(30);

// Menghitung kuadrat dari hasil konversi.
const resultKuadratFromFahrenheit = kuadrat(converseCelsiusToFahrenheit);

console.log(`Kuadrat dari hasil konversi celcius ke fahrenheit adalah ${resultKuadratFromFahrenheit}`); 