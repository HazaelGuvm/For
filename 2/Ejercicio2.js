// Arreglo de Pokémon
const pokemons = [
    { numero: 1, nombre: "Bulbasaur" },
    { numero: 2, nombre: "Ivysaur" },
    { numero: 3, nombre: "Venusaur" },
    { numero: 4, nombre: "Charmander" },
    { numero: 5, nombre: "Charmeleon" },
    { numero: 6, nombre: "Charizard" },
    { numero: 7, nombre: "Squirtle" },
    { numero: 8, nombre: "Wartortle" },
    { numero: 9, nombre: "Blastoise" },
    { numero: 10, nombre: "Caterpie" },
    // Añadir más Pokémon si es necesario
];

// Solicitar al usuario un número
let numeroUsuario = parseInt(prompt("Ingrese un número:"));

// Verificar si el número ingresado es válido
if (isNaN(numeroUsuario) || numeroUsuario < 1) {
    console.log("Por favor, ingrese un número válido mayor o igual a 1.");
} else {
    // Iterar desde el número 1 hasta el número ingresado por el usuario
    for (let i = 1; i <= numeroUsuario; i++) {
        // Verificar si i es múltiplo de 5
        if (i % 5 === 0) {
            // Encontrar el Pokémon con el número i en el arreglo
            let pokemon = pokemons.find(pokemon => pokemon.numero === i);
            if (pokemon) {
                // Mostrar el nombre del Pokémon si se encuentra
                console.log(pokemon.nombre);
            }
        }
    }
}
