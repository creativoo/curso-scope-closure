// variables

var a; // declarando la variable "a"
var b = b // declaración y asignación.
b = 'bb'; // reasignación.
var a ='aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // Global Scope

function bestFruit() {
    console.log(fruit);
}

bestFruit();



function countries() {
    country = 'Colombia'; // Asignación sin declaración
    console.log(country);
}

countries();
console.log(country);