/*
7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
*/

console.clear();
let matriz = new Array(3);

for (let col = 0; col < 3; col++) {
    matriz[col] = new Array(3);
    for (let linha = 0; linha < 3; linha++) {
        let n: number = 0
        n = Math.floor(Math.random()*9)

        if(n >= 0 && n < 10) {
            matriz[col][linha] = n
        } else {
            linha--;
        }
    }
}
for (let linha = 0; linha < 3; linha++) {
    console.log(matriz[linha]);
}