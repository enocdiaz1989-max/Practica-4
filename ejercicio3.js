const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el número de filas: ', (entradaFilas) => {

    let filas = parseInt(entradaFilas);

    rl.question('Ingresa el número de columnas: ', (entradaColumnas) => {

        let columnas = parseInt(entradaColumnas);

        if (
            isNaN(filas) ||
            isNaN(columnas) ||
            filas <= 0 ||
            columnas <= 0
        ) {

            console.log('Error: Las filas y columnas deben ser enteros mayores a 0.');

        } else {

            console.log('\n--- CUADRÍCULA DE COORDENADAS ---');

            for (let fila = 1; fila <= filas; fila++) {

                let linea = '';

                for (let columna = 1; columna <= columnas; columna++) {

                    linea = linea + `[${fila}, ${columna}] `;
                }

                console.log(linea);
            }
        }

        rl.close();
    });
});