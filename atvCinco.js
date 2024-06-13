/*
5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.
*/
console.clear();
var teclado = require("prompt-sync")();
var matriz = new Array(3);
for (var col = 0; col < 3; col++) {
    matriz[col] = new Array(3);
    for (var linha = 0; linha < 3; linha++) {
        var numero = teclado("Digite o numero que vai estar no endere\u00E7o [".concat(col, ", ").concat(linha, "]: "));
        matriz[col][linha] = numero;
    }
}
for (var col = 0; col < 3; col++) {
    console.log(matriz[col]);
}
