//1. ödev
console.log("Birinci ödev");

let input = "Max Muster";
let result = randomizeCharacters(input);
console.log(result);

function randomizeCharacters(inputString) {
    let chars = Array.from(inputString);
    let charslength = chars.length;
    let result = '';

    for (index = 0; index < charslength; index++) {
        result += chars[GetRandom(index)];
    }
    return result;
}
console.log('');
console.log('');
//ikinci ödev
console.log("ikinci ödev");

let month = 11;
let monthName = convertToMonthName(month);
console.log(monthName);

function convertToMonthName(month) {
    let monate = ["ocak", "subat", "mart", "nisan", "mayis", "haziran", "temmuz", "agustos", "eylül", "ekim", "kasim", "aralik"];
    let monateLength = monate.length;
    for (let i = 0; i <= monateLength; i++) {
        monatesName = monate[month - 1];

    }
    return monatesName;
}

console.log('');
console.log('');

//ödev 3;
console.log("ödev:3");

let matrix = [[1, 5],[2, 0],[3, 4]];

console.log("orijinal matrix:");
console.log(matrix);

let randomizedMatrix = randomizeMatrix(matrix);

console.log("\nkaristirilmis matrix:");
console.log(randomizeMatrix(matrix));

function randomizeMatrix(matrix) {
    let result = [];

    matrixLength = matrix[0].length;
    matrixHeight = matrix.length;
    let myArray = [];
    let myArrayRandom = [];

    let k = 0;

    for (let spalte = 0; spalte < matrixHeight; spalte++) {
        for (let zeile = 0; zeile < matrixLength; zeile++) {
            myArray[k] = matrix[spalte][zeile];
            k++;
        }
    }

    Array.prototype.shuffle = arrayShuffle;
    myArray.shuffle();

    k = 0;

    for (let spalte = 0; spalte < matrixHeight; spalte++) {
        for (let zeile = 0; zeile < matrixLength; zeile++) {
            matrix[spalte][zeile] = myArray[k];
            k++;
        }
    }

    return matrix;

}

function arrayShuffle() {
    let tmp, rand;
    for (let i = 0; i < this.length; i++) {
        rand = Math.floor(Math.random() * this.length);
        tmp = this[i];
        this[i] = this[rand];
        this[rand] = tmp;
    }
}

function GetRandom(value) {
    return Math.floor(Math.random() * value + 1);
}