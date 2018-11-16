
function sonucSayisiniAl(sonucTipi, liste){
    let result = 0;
    for(let i = 0; i < liste.length; i++){
        if(liste[i].sonuc == sonucTipi){
            result++;
        }
    }
    return result;
}


function generateReport(cocugunCevaplari, alistirmaBilgileri){

    let raporDataYapisi = [
       
        {label: "Cocugun Ismi", data: alistirmaBilgileri.cocukIsmi},
        {label: "Toplam Soru Sayisi", data: alistirmaBilgileri.toplamAlistirmaSayisi},
        {label: "Toplam Süre", data: toplamOyunSuresiAl()},
        {label: "Bitirme Süresi", data: 0},
        {label: "Dogru sayisi", data: sonucSayisiniAl("DOGRU", cocugunCevaplari)},
        {label: "Yanlis sayisi", data: sonucSayisiniAl("YANLIS", cocugunCevaplari)},
        {label: "Bos sayisi", data: sonucSayisiniAl("BOS", cocugunCevaplari)},
        {label: "Not", data: notuHesapla(sonucSayisiniAl("DOGRU", cocugunCevaplari), alistirmaBilgileri.toplamAlistirmaSayisi)},
        {label: "Dogru Yüzdesi", data: dogruCevapYüzdesiniHesapla(sonucSayisiniAl("DOGRU", cocugunCevaplari), alistirmaBilgileri.toplamAlistirmaSayisi)}
    ];

    let rows = [];
    for(let i=0; i<raporDataYapisi.length; i++){
        rows.push(`
            <tr>
                <td>${raporDataYapisi[i].label}</td>
                <td>${raporDataYapisi[i].data}</td>
            </tr>
        `);
        //sonuclariSonsuzaKadarKaydet();
    }

    $('#current_result table').html(rows.join(""));
    document.getElementById('sonuc_modal').showModal();

    return raporDataYapisi;
}

