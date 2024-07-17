// Definimos el arreglo
let arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

// Iteramos sobre el arreglo usando un bucle for
for (let i = 0; i < arreglo.length; i++) {
    // Verificamos si el elemento en la posición i es un número
    if (typeof arreglo[i] === 'number') {
        // Mostramos el elemento en consola si es un número
        console.log(arreglo[i]);
    }
}