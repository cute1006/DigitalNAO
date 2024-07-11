var randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
console.log(randomValue);
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
//# sourceMappingURL=any-unknow.js.map