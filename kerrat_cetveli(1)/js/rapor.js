
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
    ];

    let rows = [];
    for(let i=0; i<raporDataYapisi.length; i++){
        rows.push(`
            <tr>
                <td>${raporDataYapisi[i].label}</td>
                <td>${raporDataYapisi[i].data}</td>
            </tr>
        `);
    }

    $('#current_result table').html(rows.join(""));
    document.getElementById('sonuc_modal').showModal();

    return raporDataYapisi;
}


function simdiyeKadarRaporlamaIcinSaklananNotlariGetir(cocukIsmi){
    // local storage'a ulas ve cocugun raporlarini getir.
    let cocugunRaporlari = sonuclariGetir(cocukIsmi);
    /*
    let sonucArray = [];
    for(let raporlarIndexi=0; raporlarIndexi<cocugunRaporlari.length; raporlarIndexi++){
        let siradakiRapor = cocugunRaporlari[raporlarIndexi];
        
        for(let i=0; i<siradakiRapor.length; i++){
            if(siradakiRapor[i].label === "Not"){
                let not = siradakiRapor[i].data;
                sonucArray.push(not);
            }
        }
    }
    */

    // [6.0, 3.0. 5.0];
    return cocugunRaporlari.map( (rapor) => rapor.find( (bilgi) => bilgi.label === "Not").data);
    
    /*
    let notlar = cocugunRaporlari.map(function(rapor){
        let sonuc = rapor.find(function(bilgi){
                        return bilgi.label === "Not";
                    });
               // {"label": "Not", "data": 6.0}     
        return sonuc.data;
    });
    return notlar;
    */
}

function generateBarChart(notlar){

    /*
    let bars = [];
    for(let i=0; i<notlar.length; i++){
        bars.push(`
            <div class="barChartItem" 
                style="height:${notlar[i] * 50}px; background-color:rgb(0, ${(notlar[i]*40)%255}, 0);"  
            >
            ${notlar[i]}
            </div>
        `);
    }
    */

    let bars = 
        notlar.map( (not) => `<div class="barChartItem" style="height:${not * 50}px; background-color:rgb(0, ${(not*40)%255}, 0);"> 
                                    ${not} 
                              </div>`);
 
    $('#raport_modal').html(bars.join("")); 
    document.getElementById('raport_modal').showModal();
}
