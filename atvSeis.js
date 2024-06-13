/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,exiba a matriz na tela.
*/
console.clear();
var teclado = require("prompt-sync")();
var matriz = new Array(3);
for (var col = 0; col < 3; col++) {
    matriz[col] = new Array(3);
    for (var linha = 0; linha < 3; linha++) {
        var n = 0;
        n = teclado("Digite um n\u00FAmero de 0 a 9 para o endere\u00E7o [".concat(col, ", ").concat(linha, "]: "));
        if (n >= 0 && n < 10) {
            matriz[col][linha] = n;
        }
        else {
            console.log("Digite um n\u00FAmero entre 0 e 9");
            linha--;
        }
    }
}
for (var linha = 0; linha < 3; linha++) {
    console.log(matriz[linha]);
}
