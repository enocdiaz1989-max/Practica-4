const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántas notas deseas ingresar?: ', (entradaCantidad) => {

    let cantidad = parseInt(entradaCantidad);

    if (isNaN(cantidad) || cantidad <= 0) {

        console.log('Error: Debes ingresar una cantidad mayor a 0.');
        rl.close();

    } else {

        let notas = [];
        let contador = 1;

        function pedirNota() {

            rl.question(`Ingresa la nota ${contador}: `, (entradaNota) => {

                let nota = parseFloat(entradaNota);

                if (isNaN(nota)) {

                    console.log('Error: Debes ingresar una nota numérica.');

                    pedirNota();

                } else {

                    notas.push(nota);

                    contador++;

                    if (contador <= cantidad) {

                        pedirNota();

                    } else {

                        let acumulado = 0;

                        for (let i = 0; i < notas.length; i++) {

                            acumulado = acumulado + notas[i];
                        }

                        let promedio = acumulado / cantidad;

                        console.log('\n--- RESULTADOS ---');
                        console.log(`Suma total: ${acumulado.toFixed(2)}`);
                        console.log(`Promedio final: ${promedio.toFixed(2)}`);

                        rl.close();
                    }
                }
            });
        }

        pedirNota();
    }
});