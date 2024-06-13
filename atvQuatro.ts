/*
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.
*/

console.clear();
let teclado = require(`prompt-sync`)();
let matriz: number[][] = new Array(3);


for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = new Array(3);

    for (let col = 0; col < 4; col++) {
        let numero: number = teclado(`Digite o numero que vai estar no endereço [${linha}, ${col}] da matriz: `);

        matriz[linha][col] = numero;
    }
}
console.log(matriz);