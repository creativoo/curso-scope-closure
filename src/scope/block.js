function fruits () {
    if (true) {
        var fruit1 = 'Apple'; // Function Scope
        let fruit2 = 'Kiwi'; // Block Scope (Solo se puede ejecutar dentro del bloque que esta asignado)
        const fruit3 = 'Banana'; // Block Scope (Solo se puede ejecutar dentro del bloque que esta asignado)
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1); // var (Se puede ejecutar en todo el documento)
}

fruits();