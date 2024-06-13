function matrizAleatoria(linha, coluna) {
    var matrix = [];
    for (var z = 0; z < linha; z++) {
        matrix[z] = [];
        for (var x = 0; x < coluna; x++) {
            matrix[z][x] = Math.floor(Math.random() * 21);
        }
    }
    return matrix;
}
function acharMaiorNumero(matriz) {
    var nMax = matrix[0][0];
    var linhaMax = 0;
    var colunaMax = 0;
    for (var z = 0; z < matrix.length; z++) {
        for (var x = 0; x < matrix[z].length; x++) {
            if (matrix[z][x] > nMax) {
                nMax = matrix[z][x];
                linhaMax = z;
                colunaMax = x;
            }
        }
    }
    return { valor: nMax, linha: linhaMax, col: colunaMax };
}
var matrix = matrizAleatoria(4, 4);
console.log(matrix);
var _a = acharMaiorNumero(matrix), valor = _a.valor, linha = _a.linha, col = _a.col;
console.log("Maior n\u00FAmero: ".concat(valor, " (Posi\u00E7\u00E3o: [").concat(linha, ", ").concat(col, "])"));
