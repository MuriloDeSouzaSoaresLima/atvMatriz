/*
5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.
*/

console.clear();
const teclado = require(`prompt-sync`)();
let matriz: number[][] = new Array(3);

for (let col = 0; col < 3; col++) {
    matriz[col] = new Array(3);
    for (let linha = 0; linha < 3; linha++) {
        let numero: number = teclado(`Digite o numero que vai estar no endereço [${col}, ${linha}]: `);
        matriz[col][linha] = numero;
    }
}

for (let col = 0; col < 3; col++) {
    console.log(matriz[col]);
}