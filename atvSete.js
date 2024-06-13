/*
7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
*/
console.clear();
var matriz = new Array(3);
for (var col = 0; col < 3; col++) {
    matriz[col] = new Array(3);
    for (var linha = 0; linha < 3; linha++) {
        var n = 0;
        n = Math.floor(Math.random() * 9);
        if (n >= 0 && n < 10) {
            matriz[col][linha] = n;
        }
        else {
            linha--;
        }
    }
}
for (var linha = 0; linha < 3; linha++) {
    console.log(matriz[linha]);
}
