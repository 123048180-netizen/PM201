const prompt = require("prompt-sync")();

let productos = [
    {nombre:"expresso",categoria:"bebida",ingredientes:"Leche entera con café de grano molido veracruzano",precio:55},
    {nombre:"Oatmealcookie",categoria:"postre",ingredientes:"Galleta hecha con miel y arandanos 3pz", precio:40},
    {nombre:"Tea Green",categoria:"bebida", ingredientes:"Té verde caliente endulzado con miel",precio:55},
    {nombre:"Cheese Salad Sándwich",categoria:"entrada", ingredientes:"Pan de centeno relleno de queso blanco y chedar junto con aderezo especial de la casa con aguacate y lechuga", precio:55},
    {nombre:"Chocolate Cupcake",categoria:"postre",ingredientes:"Pan de chocolate especial de la casa con arandanos y nuez",precio:35},
    {nombre:"Expresso Doble",categoria:"bebida",ingredientes:"Café veracruzano intenso",precio:55},
    {nombre:"Cheesecake",categoria:"postre",ingredientes:"Queso crema, vainilla",precio:40},
    {nombre:"Pay de Limón",categoria:"postre",ingredientes:"Limón, galleta, leche condensada",precio:60},
    {nombre:"Papas Gajo",categoria:"snack",ingredientes:"Papa sazonada, especias",precio:45},
    {nombre:"Nachos con Queso",categoria:"snack",ingredientes:"Totopos, queso cheddar",precio:65},
    {nombre:"Dedos de Queso",categoria:"snack",ingredientes:"Queso mozzarella empanizado",precio:75},
    {nombre:"Panini Jamón y Queso",categoria:"entrada",ingredientes:"Jamón, queso manchego",precio:75},
    {nombre:"Milkshake Oreo",categoria:"bebida",ingredientes:"Helado, Oreo, crema",precio:110},
    {nombre:"Club Sandwich",categoria:"plato fuerte",ingredientes:"Pollo, jamón, tocino",precio:145},
    {nombre:"Hamburguesa Gourmet",categoria:"plato fuerte",ingredientes:"Doble carne, queso suizo",precio:190}
];

function menuCocina(){

    let opcion;

    while (opcion !== 0) {

        console.log(`
---------- COCINA ------------

1. Agregar
2. Listar
3. Editar
4. Eliminar
5. Buscar categoría
6. Buscar producto
7. Filtrar precios
0. Salir
`);

        opcion = parseInt(prompt("Elige una opción: "));

        switch (opcion) {

            case 1:

                let productoNuevo = {
                    nombre: prompt("Nombre: "),
                    categoria: prompt("Categoria: "),
                    ingredientes: prompt("Ingredientes: "),
                    precio: parseInt(prompt("Precio: "))
                };

                productos.push(productoNuevo);

                console.log("Producto agregado");

                mostrarTabla(productos);

            break;

            case 2:

                mostrarTabla(productos);

            break;

            case 3:

                productos.forEach((producto, index) => {
                    console.log(`${index}. ${producto.nombre}`);
                });

                let indexEditar = parseInt(
                    prompt("Ingresa número: ")
                );

                if(indexEditar >= 0 && indexEditar < productos.length){

                    productos[indexEditar].nombre =
                        prompt("Nuevo nombre: ");

                    productos[indexEditar].categoria =
                        prompt("Nueva categoria: ");

                    productos[indexEditar].ingredientes =
                        prompt("Nuevos ingredientes: ");

                    productos[indexEditar].precio =
                        parseInt(prompt("Nuevo precio: "));

                    console.log("Producto actualizado");

                    mostrarTabla(productos);

                } else {

                    console.log("Índice inválido");
                }

            break;

            case 4:

                productos.forEach((producto, index) => {
                    console.log(`${index}. ${producto.nombre}`);
                });

                let indexEliminar = parseInt(
                    prompt("Producto a eliminar: ")
                );

                if(indexEliminar >= 0 && indexEliminar < productos.length){

                    productos.splice(indexEliminar, 1);

                    console.log("Producto eliminado");

                    mostrarTabla(productos);

                } else {

                    console.log("Índice inválido");
                }

            break;

            case 5:

                let buscarCategoria = prompt(
                    "Buscar categoria: "
                ).toLowerCase();

                let encontrados = productos.filter(
                    producto =>
                        producto.categoria.toLowerCase()
                        === buscarCategoria
                );

                if(encontrados.length > 0){

                    mostrarTabla(encontrados);

                } else {

                    console.log("No encontrado");
                }

            break;

            case 6:

                let buscarProducto = prompt(
                    "Buscar producto: "
                ).toLowerCase();

                let encontrado = productos.find(
                    producto =>
                        producto.nombre.toLowerCase()
                        === buscarProducto
                );

                if(encontrado){

                    mostrarTabla([encontrado]);

                } else {

                    console.log("Producto no encontrado");
                }

            break;

            case 7:

                let tipo = prompt(
                    "baratos o caros: "
                ).toLowerCase();

                if(tipo === "baratos"){

                    let baratos = productos.filter(
                        producto => producto.precio < 100
                    );

                    console.log("PRODUCTOS BARATOS");

                    mostrarTabla(baratos);

                } else if(tipo === "caros"){

                    let caros = productos.filter(
                        producto => producto.precio >= 100
                    );

                    console.log("PRODUCTOS CAROS");

                    mostrarTabla(caros);

                } else {

                    console.log("Solo baratos o caros");
                }

            break;

            case 0:

                console.log("Cerrando cocina...");

            break;

            default:

                console.log("Opción inválida");
        }
    }
}

function mostrarTabla(lista){

    let tabla = lista.map(producto => ({
        Nombre: producto.nombre,
        Categoria: producto.categoria,
        Ingredientes:
            producto.ingredientes.slice(0,40) + "...",
        Precio: `$${producto.precio}`
    }));

    console.table(tabla);
}

function prepararCafe(){

    return new Promise((resolve, reject) => {

        console.log("Preparando café...");

        setTimeout(() => {

            let estado = Math.random();

            if(estado > 0.6){

                resolve("Café preparado correctamente");

            } else if(estado > 0.3){

                reject("Falta ingrediente");

            } else {

                reject("Error en cocina");
            }

        }, 3000);
    });
}

function prepararAlimento(){

    return new Promise((resolve, reject) => {

        console.log("Preparando alimento...");

        setTimeout(() => {

            let estado = Math.random();

            if(estado > 0.6){

                resolve("LISTO");

            } else if(estado > 0.3){

                reject("No hay en stock");

            } else {

                reject("Problemas con la preparación");
            }

        }, 3000);
    });
}

function promociones(){

    let promos = [
        {
            nombre:"Cafe 2x1",
            descripcion:"En la compra de un cafe grande, llevate el segundo gratis",
            vigencia:"2026-05-21",
            disponible:true
        },
        {
            nombre:"Martes de Expresso",
            descripcion:"2 expressos por $90",
            vigencia:"2026-07-10",
            disponible:true
        },
        {
            nombre:"Green Mood",
            descripcion:"Tea Green con 20% de descuento",
            vigencia:"solo fines de semana",
            disponible:true
        }
    ];

    return promos;
}

module.exports = {
    productos,
    promociones,
    prepararAlimento,
    prepararCafe,
    menuCocina
};

