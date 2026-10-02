const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un número entero positivo mayor o igual a 2: ', (entrada) => {

    let numero = parseInt(entrada);

    if (isNaN(numero) || numero < 2) {

        console.log('Error: Debes ingresar un número entero mayor o igual a 2.');

    } else {

        let contador = 2;

        console.log('\n--- NÚMEROS PARES ---');

        while (contador <= numero) {

            console.log(contador);

            contador = contador + 2;
        }
    }

    rl.close();
});