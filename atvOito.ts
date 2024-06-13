function matrizAleatoria(linha: number, coluna: number): number[][] {
    let matriz1: number[][] = [];
    for (let z = 0; z < linha; z++) {
        matriz1[z] = [];
        for (let x = 0; x < coluna; x++) {
            matriz1[z][x] = Math.floor(Math.random() * 21);
        }
    }
    return matriz1;
}

function acharMaiorNumero(matriz: number[][]): { valor: number; linha: number; col: number } {
    let nMax = matriz1[0][0];
    let linhaMax = 0;
    let colunaMax = 0;

    for (let z = 0; z < matriz1.length; z++) {
        for (let x = 0; x < matriz1[z].length; x++) {
            if (matriz1[z][x] > nMax) {
                nMax = matriz1[z][x];
                linhaMax = z;
                colunaMax = x;
            }
        }
    }

    return { valor: nMax, linha: linhaMax, col: colunaMax };
}

let matriz1 = matrizAleatoria(4, 4);
console.log(matriz1);

let { valor, linha, col } = acharMaiorNumero(matriz1);
console.log(`Maior número: ${valor} (Posição: [${linha}, ${col}])`);
