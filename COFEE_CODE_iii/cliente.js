const prompt = require("prompt-sync")();

const cocina = require("./cocina");
const caja = require("./caja");

// Obtener productos desde cocina
let productos = cocina.productos;

// Obtener pedidos desde caja
let pedidos = caja.pedidos;

// =========================
// ESTADO DEL PEDIDO
// =========================

function estadoPedido(producto){

    console.log(`
Pedido recibido: ${producto.nombre}
`);

    setTimeout(() => {

        console.log(`
Preparando pedido...
`);

        // Si es bebida
        if(producto.categoria === "bebida"){

            cocina.prepararCafe()

            .then((mensaje) => {

                console.log(mensaje);

            })

            .catch((error) => {

                console.log(error);
            });
        }

        // Si es alimento
        else{

            cocina.prepararAlimento()

            .then((mensaje) => {

                console.log(mensaje);

            })

            .catch((error) => {

                console.log(error);
            });
        }

    }, 2000);

    setTimeout(() => {

        console.log(`
Empacando pedido...
`);

    }, 4000);

    setTimeout(() => {

        let entregado = Math.random() > 0.3;

        if(entregado){

            console.log(`
Pedido entregado
`);

        } else {

            console.log(`
Pedido cancelado
`);
        }

    }, 6000);
}

// =========================
// MENÚ CLIENTE
// =========================

function menuCliente(){

    let opcion = 0;

    while(opcion !== 2){

        console.log(`
===== CLIENTE =====

1. Realizar pedido
2. Salir
`);

        opcion = parseInt(
            prompt("Selecciona una opción: ")
        );

        switch(opcion){

            // =========================
            // REALIZAR PEDIDO
            // =========================

            case 1:

                let tabla = productos.map(
                    (producto,index)=>({
                        ID:index,
                        Nombre:producto.nombre,
                        Categoria:producto.categoria,
                        Precio:`$${producto.precio}`
                    })
                );

                console.table(tabla);

                let indexProducto = parseInt(
                    prompt("Selecciona producto: ")
                );

                if(
                    indexProducto >= 0 &&
                    indexProducto < productos.length
                ){

                    let cantidad = parseInt(
                        prompt("Cantidad: ")
                    );

                    let productoSeleccionado =
                        productos[indexProducto];

                    // Agregar pedido a caja
                    caja.agregarPedido(
                        indexProducto,
                        cantidad
                    );

                    // Estado del pedido
                    estadoPedido(
                        productoSeleccionado
                    );

                }

                else{

                    console.log(
                        "Producto inválido"
                    );
                }

            break;

            // =========================
            // SALIR
            // =========================

            case 2:

                console.log(
                    "Gracias por comprar"
                );

            break;

            default:

                console.log(
                    "Opción inválida"
                );
        }
    }
}

// =========================
// EXPORTAR
// =========================

module.exports = {

    menuCliente,

    pedidos
};