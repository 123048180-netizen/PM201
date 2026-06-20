const prompt = require("prompt-sync")();

let productos = [
    {
        id: 1, nombre: "Expresso", ingredientes: "Leche entera con café de grano molido veracruzano", precio: 55
    },
    {
        id: 2, nombre: "Oatmeal Cookie", ingredientes: "Galleta hecha con miel y arándanos 3pz", precio: 40
    },
    {
        id: 3, nombre: "Tea Green", ingredientes: "Té verde caliente endulzado con miel", precio: 55
    },
    {
        id: 4, nombre: "Cheese Salad Sandwich", ingredientes: "Pan de centeno relleno de queso blanco y cheddar con aguacate y lechuga", precio: 55
    },
    {
        id: 5, nombre: "Chocolate Cupcake", ingredientes: "Pan de chocolate especial de la casa con arándanos y nuez", precio: 35
    }
];

let opcion = 0;
while (opcion !== 5) {
    console.log("---------- COCINA ------------");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Editar");
    console.log("4. Eliminar");
    console.log("5. Salir");

    opcion = parseInt(prompt("Elige una opción: "));

    switch (opcion) {

        case 1:

            let productoNuevo = {
                id: parseInt(prompt("ID: ")),
                nombre: prompt("Nombre: "),
                ingredientes: prompt("Ingredientes: "),
                precio: parseInt(prompt("Precio: "))
            };

            productos.push(productoNuevo);
            console.log("Producto agregado");
            break;

        case 2:

            productos.forEach(producto => {
                console.log(
                    producto.id,
                    producto.nombre,
                    "-",
                    producto.ingredientes,
                    "$" + producto.precio
                );
            });

            break;

        case 3:

            let buscar = parseInt(prompt("ID a editar: "));

            let producto2 = productos.find(
                producto => producto.id === buscar
            );

            if (producto2) {

                producto2.nombre = prompt("Nuevo nombre: ");
                producto2.ingredientes = prompt("Nuevos ingredientes: ");
                producto2.precio = parseInt(prompt("Nuevo precio: "));

                console.log("Producto actualizado");

            } else {

                console.log("No se encontró el ID");
            }

            break;

        case 4:

            let eliminar = parseInt(prompt("ID a eliminar: "));

            productos = productos.filter(
                producto => producto.id !== eliminar
            );

            console.log("Producto eliminado");

            break;

        case 5:

            console.log("Saliendo...");
            break;

        default:

            console.log("Solo opciones del 1 al 5");
    }
    
}