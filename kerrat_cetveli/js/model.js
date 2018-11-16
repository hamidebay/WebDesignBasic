

let cocukIsmi = null;
let toplamAlistirmaSayisi = 50;
let tekAlistirmaSueresi = 2;
let alistirmaListesi = [];


/**
 * Steps
 * - Javascriptin native random metodlarini kullarak verilen max ve min degerleri arasinda bir random tam sayi üretirim
 *
 * @param {*} min
 * @param {*} max
 * @returns
 */
function carpanUeret(min, max){
    let random = Math.floor(Math.random() * (max-min+1)) + min;
    return random;
}

/**
 * Steps:
 * - Bana gelen carpan max ve min degerlerine göre random sayi üretirim
 * - carpan1 ve carpan2 icin bu islemi yaparim.
 *
 * @param {*} carpan1Min
 * @param {*} carpan1Max
 * @param {*} carpan2Min
 * @param {*} carpan2Max
 * @returns
 */
function alistirmaOlustur(carpan1Min, carpan1Max, carpan2Min, carpan2Max){
    let birinciCarpan = carpanUeret(carpan1Min, carpan1Max);
    let ikinciCarpan = carpanUeret(carpan2Min, carpan2Max);

    return {carpan1: birinciCarpan, carpan2: ikinciCarpan};
}


function toplamOyunSuresiAl(){
    return toplamAlistirmaSayisi * tekAlistirmaSueresi;
}

/**
 * Steps:
 * - Bana veri olarak gelen "toplamAlistirmaSayisi" kadar alistirma üretmem gerekiyor
 * - Herbir alistirmayi olusturmasi icin "alistirmaOlustur" fonksiyonuna delege ediyorum.
 *
 * @param {*} veriler
 * @returns
 */
function alistirmalariOlustur(veriler){

    cocukIsmi = veriler.cocukIsmi;
    toplamAlistirmaSayisi = veriler.toplamAlistirmaSayisi;
    tekAlistirmaSueresi = veriler.tekAlistirmaSueresi;


    for(let i=0; i<veriler.toplamAlistirmaSayisi; i++){
        let alistirma = 
            alistirmaOlustur(veriler.biriniciCarpanMinimum,
                            veriler.biriniciCarpanMaximum,
                            veriler.ikinciCarpanMinimum,
                            veriler.ikinciCarpanMaximum);
        alistirmaListesi.push(alistirma);
    }

    return alistirmaListesi;
}


function alistirmalariKontrolEt(kullaniciCevaplari){  
    // [{index:0, result: 11}, {index:1, result: 23}, ...]

    for(let i=0; i<kullaniciCevaplari.length; i++){
        let alistirma = alistirmaListesi[kullaniciCevaplari[i].index];
        let alistirmaSonucu = alistirma.carpan1 * alistirma.carpan2;

        if(kullaniciCevaplari[i].cevap == ""){
            kullaniciCevaplari[i].sonuc = "BOS";
        }else if(kullaniciCevaplari[i].cevap == alistirmaSonucu){
            kullaniciCevaplari[i].sonuc = "DOGRU";
        }else{
            kullaniciCevaplari[i].sonuc = "YANLIS";
        }
    }

    return kullaniciCevaplari;
}


function notuHesapla(dogruSayisi, toplamSoruSayisi){
    return ((dogruSayisi/toplamSoruSayisi) * 6).toFixed(1);
}

function dogruCevapYüzdesiniHesapla(dogruSayisi, toplamSoruSayisi){
    return (dogruSayisi*100/toplamSoruSayisi).toFixed(1);
    console.log(dogruCevapYüzdesiniHesapla());
}