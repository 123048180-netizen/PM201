const prompt = require("prompt-sync")();

const cliente = require("./cliente");
const cocina = require("./cocina");

// Obtenemos los productos desde cocina cn el arreglo de productos
let productos = cocina.productos;

// llamamos el arreglo donde estan los pedidos del cliente
let pedidos = cliente.pedidos || [];

// Para guardar el total acumulado
let totalAcumulado = 0;

function agregarPedido(idProducto, cantidad){

    // Primero buscamos producto
    let productoEncontrado = productos.find(
        (producto,index) => index === idProducto
    );

    // Condicion para ver que exista 
    if(productoEncontrado){

        let subtotal =
            productoEncontrado.precio * cantidad;

        let pedido = {

            producto: productoEncontrado.nombre,

            precio: productoEncontrado.precio,

            cantidad: cantidad,

            subtotal: subtotal
        };

        // Guardamos el nuevo pedido en el arreglo
        pedidos.push(pedido);

        // Acumulamos el total general
        totalAcumulado += subtotal;

        console.log(`

*******TU PEDIDO FUE AGREGADO *******

Producto: ${pedido.producto}

Precio unitario: $${pedido.precio}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}

TOTAL ACUMULADO: $${totalAcumulado}
`);
    }

    else{

        console.log("Producto no encontrado");
    }
}

//uso del callnack para notificar el estado del pedido

function notificar(estado){

    console.log(`
===== NOTIFICACIÓN =====

${estado}
`);
}

//funciones de caja
function menuCaja(){

    let opcion = 0;

    while(opcion !== 4){

        console.log(`
******* BIENVENIDO A CAJA *******

1. Ver menú
2. Agregar pedido
3. Ver ticket
4. Salir
`);

        opcion = parseInt(
            prompt("Selecciona una opción: ")
        );

        switch(opcion){

           //MENU DE CAJA

            case 1:

                console.log(`
******* PRODUCTOS DISPONIBLES *******
`);

                console.table(

                    productos.map((producto,index)=>({

                        ID:index,

                        Nombre:producto.nombre,

                        Categoria:producto.categoria,

                        Precio:`$${producto.precio}`
                    }))
                );

            break;

            //Para agregar los pedidos

            case 2:

                console.table(

                    productos.map((producto,index)=>({

                        ID:index,

                        Nombre:producto.nombre,

                        Precio:`$${producto.precio}`
                    }))
                );

                let id = parseInt(
                    prompt("Ingresa ID del producto: ")
                );

                let cantidad = parseInt(
                    prompt("Cantidad: ")
                );

                agregarPedido(id,cantidad);

            break;

            //VER TICKET

            case 3:

                console.log(`
****** TICKET ******
`);

                // Si no hay pedidos
                if(pedidos.length === 0){

                    console.log(
                        "No hay pedidos registrados"
                    );

                    break;
                }

                // Mostramos los pedidos con el arreglo
                pedidos.forEach((pedido,index)=>{

                    const {
                        producto,
                        precio,
                        cantidad,
                        subtotal
                    } = pedido;

                    console.log(`
Pedido #${index+1}

Producto: ${producto}

Precio unitario: $${precio}

Cantidad: ${cantidad}

Subtotal: $${subtotal}
`);
                });

                // Subtotal general
                let subtotalGeneral = pedidos.reduce(

                    (acumulador,pedido)=>

                    acumulador + pedido.subtotal,

                    0
                );

                // IVA GENESARL
                let iva = subtotalGeneral * 0.16;

                // Total
                let totalFinal =
                    subtotalGeneral + iva;

                console.log(`
================================

Subtotal: $${subtotalGeneral}

IVA (16%): $${iva.toFixed(2)}

TOTAL A PAGAR: $${totalFinal.toFixed(2)}

================================
`);

                // otro callback
                notificar("Pedido listo");

            break;

            //SALIMSO

            case 4:

                console.log(
                    "Saliendo de caja..."
                );

            break;

            default:

                console.log(
                    "Opción inválida"
                );
        }
    }
}



module.exports = {

    menuCaja,

    pedidos,

    agregarPedido
};