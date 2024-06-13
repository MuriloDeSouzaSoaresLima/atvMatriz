/*
O código 1 e 2 desse slide deve ser salva e enviado juntos com
as atividades abaixo. Todo o conteúdo deve ser
compartilhado no github
*/
console.clear();
var teclado = require("Prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        matrizDois[i][j] = nome;
    }
}
console.log(matrizDois);
