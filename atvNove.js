var teclado = require("prompt-sync")();
function criarMatriz() {
    var matriz = [];
    console.log("Insira os elementos da matriz 6x6: ");
    for (var x = 0; x < 6; x++) {
        matriz[x] = [];
        for (var y = 0; y < 6; y++) {
            matriz[x][y] = parseInt(teclado("Insira o elemento da posi\u00E7\u00E3o [".concat(x, "][").concat(y, "]: ")) || "0");
        }
    }
    return matriz;
}
function somaPares(matriz) {
    var soma = 0;
    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < 6; y++) {
            if (y % 2 == 0) {
                soma += matriz[x][y];
            }
        }
    }
    return soma;
}
function principal() {
    var matriz = criarMatriz();
    console.log(matriz);
    var soma = somaPares(matriz);
    console.log("A soma dos elementos das colunas pares \u00E9: ".concat(soma));
}
principal();
