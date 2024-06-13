/*
O código 1 e 2 desse slide deve ser salva e enviado juntos com
as atividades abaixo. Todo o conteúdo deve ser
compartilhado no github
*/
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = []; // declarando minha matriz
// No código que esta no slide não mostra a parte em que é declarada a váriavel linha e coluna, então eu coloquei da forma em que acho estar correta.
var linha = parseInt(teclado("Digite o n\u00FAmero de linhas: "));
var coluna = parseInt(teclado("Digite o n\u00FAmero de colunas: "));
// z percorre as linhas
for (var z = 0; z < linha; z++) {
    // Cria um array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        // Ateibuição via entrada de dados manual na variavel nome
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: "));
        // Atribui nome na minhaMatriz do endereço dado por z e x
        minhaMatriz[z][x] = nome;
    }
}
// Imprime a matriz
console.log(minhaMatriz);
