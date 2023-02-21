'use strict'; // Impide que pi se declaré como una variable por lógica y se apegue al modo estricto, si no esta declarado, no esta asignado.
pi = 3.1416;
console.log(pi);

function myFunction() {
    return pi = 3.1416;
}

console.log(myFunction());

