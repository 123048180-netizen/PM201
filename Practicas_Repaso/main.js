/*// main.js

// Importamos la función restar desde el archivo utils.js
const { restar } = require("./until");

// Prueba 1
console.log("10 - 5 =", restar(10, 5));

// Prueba 2
console.log("20 - 8 =", restar(20, 8));

// Prueba 3
console.log("100 - 25 =", restar(100, 25));*/
/*
//b)
// Función que retorna una promesa
function verificarUsuario(usuario) {

    return new Promise((resolve, reject) => {

        // Si el usuario es admin, se concede acceso
        if (usuario === "admin") {
            resolve("Acceso concedido");
        }

        // Cualquier otro usuario es rechazado
        else {
            reject("Acceso denegado");
        }

    });
}

// Usuario válido
verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));

// Usuario inválido
verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err));*/
    function simularPeticionAPI() {

    return new Promise((resolve) => {

        // Simula una espera de 5 segundos
        setTimeout(() => {

            resolve("Datos recibidos correctamente");

        }, 5000);

    });

}async function obtenerDatos() {

    // Mensaje antes de esperar la respuesta
    console.log("Consultando API...");

    // await detiene la ejecución hasta recibir la respuesta
    const resultado = await simularPeticionAPI();

    // Muestra el resultado recibido
    console.log(resultado);

}
obtenerDatos();