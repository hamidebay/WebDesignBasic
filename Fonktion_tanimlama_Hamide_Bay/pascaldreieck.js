/*let pascalLength = 5;
const arrayOne= [1];
const arrayTwo = [1, 1];
function generatePascalTriangel(pascalLgth){

this.pascalLgth = pascalLength;
let pascal = [];

for(let i=2; i <= pascalLgth-1; i++ ){
    for (let j= 1; j <= pascalLgth-1; j++){
        console.log("1"+ (i-1)+ +j+"1");

    }
    return pascal;
}

}

*/
function myPascal() {
    let myArray = [1];

    for (let i = 1; i < size; i++) {
        myArray[i] = generatePascalLine(myArray[i - 1], i + 1);
    }
    return myArray;
}

function generatePascalLine(previosLine, lineIndex) {
    let newLine = [];
    newLine.push(1);

    for (let i = 1; i < lineIndex - 1; i++) {
        newLine.push(previosLine[1] + previosLine[i - 1]);
    }

}

