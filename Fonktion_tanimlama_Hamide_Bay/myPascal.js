
function generatePascalTriangle(rowNumber) {
    let result = [];
    result[0] = [1];
    result[1] = [1, 1];
    for (let i = 2; i < rowNumber; i++) {
        result[i] = [1];
        for (let j = 1; j <= i - 1; j++) {
            result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
            result[i].push(1);

        }
    }
    return result;
}

function printPascal(rowNumber) {
    let anzahlLeerZeichen = rowNumber;
    let leerZeichen = "";
    for (var i = 0; i < generatePascalTriangle(rowNumber).length; i++) {
        for (let j = 0; j < anzahlLeerZeichen; j++) {
            leerZeichen += " ";
        }
        anzahlLeerZeichen--;

        console.log(leerZeichen + generatePascalTriangle(rowNumber)[i] + "");
        leerZeichen = "";
    }
}


printPascal(3);