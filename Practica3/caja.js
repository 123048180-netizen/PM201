const prompt = require("prompt-sync")();

// Exportamos el arreglo de productos
import { productos } from './cocina.js';
let pedidos = [];

function agregarPedido(idProducto, cantidad) {

    // Buscar producto por ID
    let productoEncontrado = productos.find(
        producto => producto.id === idProducto
    );

    // Si el producto existe
    if (productoEncontrado) {

        // Calcular subtotal
        let subtotal = productoEncontrado.precio * cantidad;

        // Crear pedido
        let pedido = {

            producto: productoEncontrado.nombre,

            precio: productoEncontrado.precio,

            cantidad: cantidad,

            subtotal: subtotal
        };

        // Guardar pedido
        pedidos.push(pedido);

        console.log(`

PEDIDO AGREGADO

Producto: ${pedido.producto}

Precio unitario: $${pedido.precio}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}
`);
    }

    else {

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

            console.log(`
******** MENÚ ********
`);

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
*** LISTA DE PEDIDOS ***
`);

            if (pedidos.length === 0) {

                console.log("No hay pedidos registrados");
            }

            else {

                pedidos.forEach((pedido, index) => {

                    // Destructuring
                    const { producto, precio, cantidad, subtotal } = pedido;

                    console.log(`
Pedido #${index + 1}

Producto: ${producto}

Precio unitario: $${precio}

Cantidad: ${cantidad}

Subtotal: $${subtotal}
`);
                });

                // Subtotal general usando reduce()
                let subtotalGeneral = pedidos.reduce(
                    (acumulador, pedido) =>
                        acumulador + pedido.subtotal,
                    0
                );

                // IVA
                let iva = subtotalGeneral * 0.16;

                // Total final
                let totalFinal = subtotalGeneral + iva;
            }

        break;

        case 4:

            console.log("Saliendo del sistema...");

        break;

        default:

            console.log("Solo opciones del 1 al 4");
    }
}