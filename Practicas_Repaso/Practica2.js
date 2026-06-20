/*1. Tienes el siguiente objeto persona.
2. Extrae los valores de nombre, edad y ciudad usando destructuración.
3. Luego, muestra un mensaje como: "Me llamo Ivan Isay, tengo 37 años y vivo en Qro."

const persona= {
    nombre: "Isabel Garcia",
    edad: 20,
    direccion:{
        ciudad: "qro",
        pais: "MX"
    }
};
//Destructuracion
const { nombre, edad, direccion: {ciudad} } = persona;

// Mensaje
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);*/

/*
//Filtrar productos con precio mayor a 1000 y obtener solo sus nombres
const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

// Filtra los productos con precio mayor a 1000
const productosCaros = productos.filter(producto => producto.precio > 1000);

// Obtiene solo los nombres
const nombres = productosCaros.map(producto => producto.nombre);

console.log(nombres);*/
/*
const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];
//1. Buscar a la persona con nombre "Luis" usando find()
const luis = personas.find(persona => persona.nombre === "Luis");

console.log(luis);
//2. Imprimir el nombre y edad de cada persona usando forEach()
personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});
//Sumar todas las edades usando reduce()
const totalEdades = personas.reduce(
    (acumulador, persona) => acumulador + persona.edad,
    0
);

console.log(totalEdades);*/