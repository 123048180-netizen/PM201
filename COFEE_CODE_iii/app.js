const prompt = require("prompt-sync")();

let opcion = 0;

while(opcion !== 4){

    console.log(`
========= CAFETERÍA =========

1. Cliente
2. Cocina
3. Caja
4. Salir
`);

    opcion = parseInt(
        prompt("Selecciona una opción: ")
    );

    switch(opcion){



        case 1:

            const cliente = require("./cliente");

            if(cliente.menuCliente){

                cliente.menuCliente();

            } else {

                console.log(
                    "No existe menuCliente()"
                );
            }

        break;

        case 2:

            const cocina = require("./cocina");

            if(cocina.menuCocina){

                cocina.menuCocina();

            } else {

                console.log(
                    "No existe menuCocina()"
                );
            }

        break;


        case 3:

            const caja = require("./caja");

            if(caja.menuCaja){

                caja.menuCaja();

            } else {

                console.log(
                    "No existe menuCaja()"
                );
            }

        break;

        

        case 4:

            console.log(
                "Sistema finalizado"
            );

        break;

        default:

            console.log(
                "Opción inválida"
            );
    }
}