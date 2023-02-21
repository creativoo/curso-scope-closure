var firstName; // Undefined: No tiene valor asignado.
firstName = 'Oscar' // Valor asignado: Oscar.
console.log(firstName);

var lastName = "David"; // Asignando y declarando la variable.
lastName = 'Ana'; // Reasignación de variable de "David" a "Ana".
console.log(lastName);

var secondName = 'David'; // Asignamos el nombre de David.
var secondName = 'Ana'; // Redeclaramos y reasignamos el nombre de Ana.
console.log(secondName);

// Let (Se puede reasignar pero NO Re-declarar)
let fruit = 'Apple'; // Se declara la variable y se asigna el nombre de la fruta.
fruit = 'Kiwi'; // se reasigna el nombre de la fruta.
let fruit = 'Banana' // No es posible, no se puede Re-declarar.la variable.

// Const (No se puede reasignar NI Re-declarar)
const animal = 'dog'; // Se declara la constante y se asigna el animal "dog".
animal = 'cat'; // se intenta reasignar el valor del animal a "cat".
console.log(animal); // No se puede reasignar el valor, ya que es una constante y no puede remplazar el valor.

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles):

vehicles.pop();
console.log(vehicles);
