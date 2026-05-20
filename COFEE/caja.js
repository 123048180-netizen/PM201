const prompt = require("prompt-sync")();

let productos = [

    { id: 1, nombre: "Expresso", precio: 55 },

    { id: 2, nombre: "Oatmeal Cookie", precio: 40 },

    { id: 3, nombre: "Tea Green", precio: 55 },

    { id: 4, nombre: "Cheese Salad Sandwich", precio: 55 },

    { id: 5, nombre: "Chocolate Cupcake", precio: 35 }

];
let pedidos = [];
let totalAcumulado = 0;
function agregarPedido(idProducto, cantidad) {
    // creamos una variable let para que guarde el producto que sea buscado en el arreglo productos mediante el id
    let productoEncontrado = productos.find(
        producto => producto.id === idProducto
    );
    // si el id coincide con lo que se tiene 
    if (productoEncontrado) {

        // Calculamos el subtotal, multiplicando el precio por la cantidad
        let subtotal = productoEncontrado.precio * cantidad;

        // y entonces creamos nuestro pedido
        let pedido = {

            producto: productoEncontrado.nombre,

            precio: productoEncontrado.precio,

            cantidad: cantidad,

            subtotal: subtotal
        };
        // Guardar en pedidos el pedido
        pedidos.push(pedido);
        // Guarda el total del pedido
        totalAcumulado += subtotal;
        console.log(` PEDIDO AGREGADO
Producto: ${pedido.producto}
Precio unitario: $${pedido.precio}
Cantidad: ${pedido.cantidad}
Subtotal: $${pedido.subtotal}
TOTAL ACUMULADO: $${totalAcumulado}`);
    }
    else {
        
        //Si el id no coincide con lo que tenemos entonces manda un mensaje de error

        console.log("Producto no encontrado");
    }
}

let opcion = 0;

while (opcion !== 4) {

    console.log(`
================================
        CAFETERÍA
--------------------------------

1. Ver productos
2. Agregar pedido
3. Ver pedidos
4. Salir
`);

    opcion = parseInt(
        prompt("Selecciona una opción: ")
    );


    switch (opcion) {

        case 1:

            console.log(`MENÚ: `);

            productos.forEach(producto => {

                console.log(`
ID: ${producto.id}

Producto: ${producto.nombre}

Precio: $${producto.precio}
`);
            });

        break;

        case 2:

            let id = parseInt(
                prompt("Ingresa el ID del producto: ")
            );

            let cantidad = parseInt(
                prompt("Ingresa la cantidad: ")
            );

            agregarPedido(id, cantidad);

        break;


        case 3:

            console.log(`
*** LISTA DE PEDIDOS: ***
`);

            if (pedidos.length === 0) {

                console.log("No hay pedidos registrados");
            }

            else {

                pedidos.forEach((pedido, index) => {

                    console.log(`
Pedido #${index + 1}

Producto: ${pedido.producto}

Precio unitario: $${pedido.precio}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}
`);
                });

                console.log(`
******* TOTAL A PAGAR: $${totalAcumulado} *********

`);
            }

        break;

        case 4:

            console.log("Saliendo del sistema...");

        break;

        default:

            console.log("Solo opciones del 1 al 4");
    }
}