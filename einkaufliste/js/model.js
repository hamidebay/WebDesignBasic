

/**
 * Varolan alisveris listesine yeni bir kalem ekler.
 * @param {*} birKalem 
 */
function alisverisListesineKalemEkle(birKalem){

    let listeStringi = localStorage.getItem("alisverisListesi"); // String
    let liste = JSON.parse(listeStringi);

    // daha önce hicbir sey kaydetmediysem.
    if(liste == undefined){
        liste = new Array();
    }

    liste.unshift({
                    "name": birKalem, 
                    "finished": false
                  });

    listeStringi = JSON.stringify(liste);
    localStorage.setItem("alisverisListesi", listeStringi);

    return liste;
}

/**
 * Bu isimdeki kalem objesini listeden bul ve isaretle.
 * Daha sonrada listenin en sonuna gönder.
 * @param {*} isim 
 */
function kalemiHalledilmisSay(isim){

    let listeStringi = localStorage.getItem("alisverisListesi"); // String
    let liste = JSON.parse(listeStringi);

    let kalem = liste.find(kalem => kalem.name === isim);    
    kalem.finished = true;

    // arraydeki yerini bul, oradan cikar, sona ekle
    /*
    let arraydekiIndexi = liste.findIndex(kalem => kalem.name === isim);
    let silinenKalemArray = liste.splice(arraydekiIndexi, 1);
    liste.push(silinenKalemArray[0]);   
    */
   
    listeStringi = JSON.stringify(liste);
    localStorage.setItem("alisverisListesi", listeStringi);

    return liste;
}

