/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,exiba a matriz na tela.
*/

console.clear();
const teclado = require(`prompt-sync`)();
let matriz = new Array(3);

for (let col = 0; col < 3; col++) {
    matriz[col] = new Array(3);
    for (let linha = 0; linha < 3; linha++) {
        let n: number = 0
        n = teclado(`Digite um número de 0 a 9 para o endereço [${col}, ${linha}]: `);
        if(n >= 0 && n < 10) {
            matriz[col][linha] = n
        } else {
            console.log(`Digite um número entre 0 e 9`);
            linha--;
        }
    }
}
for (let linha = 0; linha < 3; linha++) {
    console.log(matriz[linha]);
}