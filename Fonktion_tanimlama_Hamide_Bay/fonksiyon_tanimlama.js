console.log("ödev: Horoscope");

// test fonksiyonu
let month = 3;
let day = 12;
let myHoroscope = findHoroscop(month, day);
console.log(myHoroscope);

function findHoroscop(month, day) {


    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        horoscope = "Koc";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        horoscope = "Boga";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        horoscope = "Ikizler";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        horoscope = "Yengec";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        horoscope = "Aslan";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        horoscope = "Basak";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        horoscope = "Terazi";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        horoscope = "Akrep";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        horoscope = "Yay";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        horoscope = "Oglak";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        horoscope = "Kova";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        horoscope = "Balik";
    } else {
        horoscope = "at";

    }
    return horoscope;
}
console.log("");
console.log("ödev: Zufahlszahlengenerator");

let altSinir = 20;
let ustSinir = 30;
let randomNumber = generateBetween(altSinir, ustSinir);
console.log(randomNumber); // 7

function generateBetween(altSinir, ustSinir) {

    random = Math.round(Math.random() * (ustSinir - altSinir)) + altSinir;

    return random;
}


console.log("");
console.log("ödev: GGT");


let gcd = findGCD(24, 18);
console.log(gcd);

function findGCD(zahl1, zahl2) {
    let teilerZahl1 = [];
    let teilerZahl2 = [];
    let zaehler1 = 0;
    let zaehler2 = 0;

    for (let i = 1; i <= zahl1; i++) {
        if (zahl1 % i == 0) {
            teilerZahl1[zaehler1] = i;
            zaehler1++;
        }
    }

    for (let j = 1; j <= zahl2; j++) {
        if (zahl2 % j == 0) {
            teilerZahl2[zaehler2] = j;
            zaehler2++;
        }
    }

    for (let a = teilerZahl1.length - 1; a >= 0; a--) {
        for (let b = teilerZahl2.length - 1; b >= 0; b--) {
            if (teilerZahl1[a] == teilerZahl2[b]) {
                return teilerZahl1[a];
            }
        }
    }
}

/*let ggt1 = findGGT(1071, 1029);
console.log(ggt1);

function findGGT(d, e) {
   
    let c = +d - +e;
    let ggt = 0;
    if (d > e) {
        for (let z = d; z >= 0; z--) {
            d = e + c;
            e = (e / c) * c + (e - ((e / c) * c));
        }
    } else if (c == 0) {
        ggt = e / (e / c);
    }

}
*/