/*
3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas.
*/
console.clear();
var teclado = require('prompt-sync')();
var matriz = [];
var linha = parseInt(teclado('Digite o número de linhas: '));
var coluna = parseInt(teclado('Digite o número de coluna: '));
for (var z = 0; z < linha; z++) {
    matriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = parseFloat(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: ")));
        matriz[z][x] = numero;
    }
}
for (var l = 0; l < linha; l++) {
    console.log(matriz[l]);
}
