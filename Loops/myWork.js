/*let zufalsZahl = Math.floor(Math.random() * 100);


function playing() {

    for (let i = 1; i <= 8; i++) {
        let zahl = prompt("Sayi tahmin et");
        if (zufalsZahl == zahl) {
            alert("you win");
        } else if (zahl > zufalsZahl) {
            alert("tahmini azaltin");
        } else {
            alert("tahmini artirin");
        }
    }
    if(i > 8){alert("hakkiniz kalmadi");
}
}
*/

function hypethenus(a, b) {
  let karelerinToplami= Math.pow(a, 2) + Math.pow(b, 2);
  
    return Math.sqrt(karelerinToplami);
}

console.log(hypethenus(3, 4));