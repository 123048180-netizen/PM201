const prompt = require("prompt-sync")();

let productos = [

    {
        id: 1,
        nombre: "Expresso",
        ingredientes: "Leche entera con café veracruzano",
        precio: 55
    },

    {
        id: 2,
        nombre: "Oatmeal Cookie",
        ingredientes: "Galleta con miel y arándanos",
        precio: 40
    },

    {
        id: 3,
        nombre: "Tea Green",
        ingredientes: "Té verde con miel",
        precio: 55
    },

    {
        id: 4,
        nombre: "Cheese Salad Sandwich",
        ingredientes: "Pan con queso y aguacate",
        precio: 55
    },

    {
        id: 5,
        nombre: "Chocolate Cupcake",
        ingredientes: "Pan de chocolate con nuez",
        precio: 35
    }

];


// ========================================
// PEDIDOS Y TOTAL
// ========================================

let pedidos = [];

let totalAcumulado = 0;

function agregarPedido(idProducto, cantidad) {

    let productoEncontrado = productos.find(
        producto => producto.id === idProducto
    );

    if (productoEncontrado) {

        let subtotal =
            productoEncontrado.precio * cantidad;

        let pedido = {

            producto: productoEncontrado.nombre,

            precio: productoEncontrado.precio,

            cantidad: cantidad,

            subtotal: subtotal
        };

        pedidos.push(pedido);

        totalAcumulado += subtotal;

        console.log(`
================================
PEDIDO AGREGADO
================================

Producto: ${pedido.producto}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}

TOTAL ACTUAL: $${totalAcumulado}
`);
    }

    else {

        console.log("Producto no encontrado");
    }
}



// ========================================
// MENÚ PRINCIPAL
// ========================================

let sistema = 0;

while (sistema !== 4) {

    console.log(`
================================
        CAFETERÍA
================================

1. Cliente
2. Caja
3. Cocina
4. Salir
`);

    sistema = parseInt(
        prompt("Selecciona una opción: ")
    );



    // ========================================
    // CLIENTE
    // ========================================

    switch (sistema) {

        case 1:

            let cliente = 0;

            while (cliente !== 4) {

                console.log(`
================================
            CLIENTE
================================

1. Ver productos
2. Agregar pedido
3. Ver pedidos
4. Regresar
`);

                cliente = parseInt(
                    prompt("Selecciona una opción: ")
                );


                switch (cliente) {


                    // VER PRODUCTOS
                    case 1:

                        console.log(`
========== PRODUCTOS ==========
`);

                        productos.forEach(producto => {

                            console.log(`
ID: ${producto.id}

Producto: ${producto.nombre}

Ingredientes:
${producto.ingredientes}

Precio: $${producto.precio}
`);
                        });

                    break;



                    // AGREGAR PEDIDO
                    case 2:

                        let id = parseInt(
                            prompt("ID del producto: ")
                        );

                        let cantidad = parseInt(
                            prompt("Cantidad: ")
                        );

                        agregarPedido(id, cantidad);

                    break;



                    // VER PEDIDOS
                    case 3:

                        console.log(`
========== PEDIDOS ==========
`);

                        pedidos.forEach((pedido, index) => {

                            console.log(`
Pedido #${index + 1}

Producto: ${pedido.producto}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}
`);
                        });

                        console.log(`
TOTAL: $${totalAcumulado}
`);

                    break;



                    // REGRESAR
                    case 4:

                        console.log("Regresando...");

                    break;


                    default:

                        console.log("Opción inválida");
                }
            }

        break;




        // ========================================
        // CAJA
        // ========================================

        case 2:

            console.log(`
================================
            CAJA
================================
`);

            if (pedidos.length === 0) {

                console.log("No hay pedidos");
            }

            else {

                pedidos.forEach((pedido, index) => {

                    console.log(`
Pedido #${index + 1}

Producto: ${pedido.producto}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}
`);
                });

                console.log(`
================================
TOTAL A COBRAR: $${totalAcumulado}
================================
`);
            }

        break;




        // ========================================
        // COCINA
        // ========================================

        case 3:

            console.log(`
================================
            COCINA
================================
`);

            if (pedidos.length === 0) {

                console.log("No hay pedidos pendientes");
            }

            else {

                pedidos.forEach((pedido, index) => {

                    console.log(`
Orden #${index + 1}

Preparar:
${pedido.producto}

Cantidad:
${pedido.cantidad}
`);
                });
            }

        break;




        // ========================================
        // SALIR
        // ========================================

        case 4:

            console.log("Saliendo del sistema...");

        break;



        default:

            console.log("Solo opciones del 1 al 4");
    }
}