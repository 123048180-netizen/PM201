function saludar(nombre) {
    console.log("Hola " + nombre);
}

function procesarUsuario(callback) {
    let nombre = "Isa";
    callback(nombre);
}

procesarUsuario(saludar);