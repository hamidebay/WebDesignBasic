console.log("Birinci ödev:");

let index= "#";
let count = 7;
let str = "";

function dreieck() {
    for (let i = 1; i <= count; i++) {
        for (let j = 1; j < i + 1; j++) {

            str += index;

        }
        console.log(str, "\n");
        str = "";
    }
}


let length=14;

let myString = "";

function carpimTablo() {
    console.log("\n");
    console.log("Ikinci ödev:");
    for (let a = 1; a <= length; a++) {
        for (let b = 1; b <= length; b++) {
            myString += "\t" + b * a;

        }

        console.log(myString);
        myString = "";


    }
}

let matrixLength=7;
let myVar = "";

function matrix() {
    console.log("\n");
    console.log("Matrix:");
    for (let c = 1; c <= matrixLength; c++) {
        for (let d = 1; d <= matrixLength; d++) {
            if (d == c) {
                myVar += "1"+' ';
            } else {

                myVar += "0" + ' ';
            }
        }
        console.log(myVar);
        myVar = "";
    }
}


let inverseLenth=8;
let myAttr = "";

function inverseMatrix(){
    console.log("\n");
    console.log("Inverse Matrix:");
    for(let e=inverseLenth; e>=1; e--){
        for(let f=1; f<=inverseLenth; f++){
            if(e==f){
                myAttr += "1" + ' ';
            }
            else{
                myAttr += "0" + ' ';
            }
        }
        console.log(myAttr);
        myAttr = "";
    }
}