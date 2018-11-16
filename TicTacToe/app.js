/**
 * Business Logic (Model)
 *
 * A Game, Tic Tac Toe
 *
 * Description:
 * Iki oyuncu sirayla ekrandaki karelere basarak kendi simgesinin vertical, horizontal ve diagonal de 3 defa gelmsini saglayacak.
 *
 * Steps:
 * 1) Ilk oyuncu istedigi bir kutuya tiklar
 * 1.1) Ilk oyuncu her zaman "X" degerini alir
 * 1.2) Dolayisiyla bu basilan kutucuga "X" degeri konulur.
 * 2) Basilan kutu bir daha kullanilamaz
 * 3.1) Son hamleyi yapan kisi icin: tüm vertical, horizontal ve diagonal cizgiler kontrol edilir. 
 *      Eger son yerlestirilen simgeden 3 tane ard arda bulursa, oyunu bu kisi kazanmis olur.
 * 3.2) Eger tüm kutucuklar dolu ise ve (3.1) olumsuz sonuc verdi ise, oyun beraber kalmistir,
 *      ekrana "No winner!" yaz ve (7)'ye atla.
 * 3.3) Bittiyse footer a kimin kazanadigi yaz ("X" , "O")
 * 3.4) Bitmediyse (1)'e dön.
 * 4) Ikinci oyuncu istedigi bir kutuya tiklar
 * 4.1) Ikinci oyuncu her zaman "O" degerini alir
 * 4.2) Dolayisiyla bu basilan kutucuga "O" degeri konulur.
 * 5) Basilan kutu bir daha kullanilamaz
 * 6) Oyunun bitip bitmedigini kontrol et
 * 6.1) Son hamleyi yapan kisi icin: tüm vertical, horizontal ve diagonal cizgiler kontrol edilir. 
 *      Eger son yerlestirilen simgeden 3 tane ard arda bulursa, oyunu bu kisi kazanmis olur.
 * 6.2) Eger tüm kutucuklar dolu ise ve (6.1) olumsuz sonuc verdi ise, oyun beraber kalmistir,
 *      ekrana "No winner!" yaz ve (7)'ye atla.
 * 6.3) Bittiyse footer a kimin kazanadigi yaz ("X" , "O")
 * 6.4) Bitmediyse (1)'e dön.
 * 7) Oyunu resetle
 *
 *
 * STATES:
 * 1) Ekran bos
 * 2) Birinci oyuncu oynadi *
 * 3) Ikinci oyuncu oynadi *
 * 4) Birinci oyuncu kazandi
 * 5) Ikinci oyuncu kazandi
 * 6) Berabere kalindi
 *
 * @author itclub.oberland@gmail.com
 * @version 1.0
 */


// NO JQUERY!!!!!!

const SIMGE_X = "X";
const SIMGE_O = "O";

let suAndaOynayanOyuncu = SIMGE_X;
let matrix = [
    [(0, 0), (0, 1), (0, 2)],
    [(1, 0), (1, 1), (1, 2)],
    [(2, 0), (2, 1), (2, 2)]

];

matrix[[(0, 0)]] = $('span').attr('coordinate', '0,0');
matrix[[(0, 1)]] = $('span').attr('coordinate', '0,1');
matrix[[(0, 2)]] = $('span').attr('coordinate', '0,2');
matrix[[(1, 0)]] = $('span').attr('coordinate', '1,0');
matrix[[(1, 1)]] = $('span').attr('coordinate', '1,1');
matrix[[(1, 2)]] = $('span').attr('coordinate', '1,2');
matrix[[(2, 0)]] = $('span').attr('coordinate', '2,0');
matrix[[(2, 1)]] = $('span').attr('coordinate', '2,1');
matrix[[(2, 2)]] = $('span').attr('coordinate', '2,2');


function oyuncuyuDegistir(suAndaOynayanOyuncu) {
    if (suAndaOynayanOyuncu == SIMGE_X) {
        suAndaOynayanOyuncu = SIMGE_O;
    } else {
        suAndaOynayanOyuncu = SIMGE_X;
    }
}

function simgeyiEkranaYaz(istenenSimge) {

    $('#game-area span').on('click', function () {
        $(this).html(suAndaOynayanOyuncu);
    });


}

function oyuncuKazandimi(sonHamleyiYapanOyuncu) {
    if ((matrix[[(0, 0)]] && matrix[[(1, 0)]] && matrix[[(2, 0)]]) || (matrix[[(0, 1)]] && matrix[[(1, 1)]] && matrix[[(2, 1)]]) || (matrix[[(0, 2)]] && matrix[[(1, 2)]] && matrix[[(2, 2)]]) || (matrix[[(0, 0)]] && matrix[[(0, 1)]] && matrix[[(0, 2)]]) || (matrix[[(1, 0)]] && matrix[[(1, 1)]] && matrix[[(1, 2)]]) || (matrix[[(2, 0)]] && matrix[[(2, 1)]] && matrix[[(2, 2)]]) || (matrix[[(0, 0)]] && matrix[[(1, 1)]] && matrix[[(2, 2)]]) || (matrix[[(0, 2)]] && matrix[[(1, 1)]] && matrix[[(2, 0)]]) == sonHamleyiYapanOyuncu) {
        alert("Kazandiniz tebrikler");
    }
}

function berabereKalindimi() {
    return false;
}

function bastigimKutuKullanilabilirmi(bastigimKutu) {

    if (bastigimKutu.html == "") {
        return true;

    } else {
        return false;

    }

}


function oyunuResetle() {
    let liste = field.getElementsByTagName("span");
    for (let i = 0; i <= liste.length; i++) {
        liste.html = "";
    }

}

/**
 * Tüm algoritma mantigi bu fonksiyon icinde tanimlanacak.
 */
function hamleYap(basilanKutununLokasyonu) {
    console.log('siradaki oyuncu:', suAndaOynayanOyuncu);


    if (bastigimKutuKullanilabilirmi(basilanKutununLokasyonu)) {
        simgeyiEkranaYaz(suAndaOynayanOyuncu);

        if (berabereKalindimi()) {
            alert("Oyun berabere bitti");
            oyunuResetle();
        } else if (oyuncuKazandimi()) {
            alert("Oyunu kazandiniz, Tebrikler");
            oyunuResetle();
        } else {
            oyuncuyuDegistir(suAndaOynayanOyuncu);
        }
    }
}