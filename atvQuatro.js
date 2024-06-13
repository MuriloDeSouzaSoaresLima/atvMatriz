/*
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.
*/
console.clear();
var teclado = require("prompt-sync")();
var matriz = new Array(3);
for (var linha = 0; linha < 3; linha++) {
    matriz[linha] = new Array(3);
    for (var col = 0; col < 4; col++) {
        var numero = teclado("Digite o numero que vai estar no endere\u00E7o [".concat(linha, ", ").concat(col, "] da matriz: "));
        matriz[linha][col] = numero;
    }
}
console.log(matriz);
