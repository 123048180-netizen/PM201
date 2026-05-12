/*JS del lado del servidor*/ 
console.log("Hola Mundo js con Node")

/*calculo */

let edad1 =12
let edad2 = 34 

console.log("Edad promedio:")
console.log((edad1+edad2)/2)

/*Medir el timpo de ejecución */
console.time("miProceso")

for(let i=0; i<10000000; i++){

}
console.timeEnd("miProceso")

/*Objetos tipo tabla */
let usuarios=[
    {nombre: "Isabel", edad: 20},
    {nombre: "Isabel", edad: 20},
];
console.table(usuarios)