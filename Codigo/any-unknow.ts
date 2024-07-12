//en este primer archivo de codigo se visualiza el tipo de dato any 
let randomValue :any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue)

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error

