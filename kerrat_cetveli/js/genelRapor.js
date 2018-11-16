/* 
1. Storage de kayitli raporlari al
2. Data yapisini olustur
3. Arraydaki her eleman icin bir div olustur
3.1. Bu divler her yeni kayitla artacak.
3.2 Divlerin boyu notla orantili olacak.
4. divleri ekranda barchart seklinde göster.

*/

function barchartSonuclari(cocukIsmi) {
    let reportsString = localStorage.getItem(cocukIsmi);
    let raporlarArrayi = JSON.parse(reportsString);
    return raporlarArrayi;
}

function generateGeneralReport(cocukIsmi) {
    let not = [barchartSonuclari[7]];

    let dataYapisi = [
        {
            label: "Not", data: not
        }
    ]

    let rows = [];
    for (let i = 0; i < not.length; i++) {

        rows.push(`
  
            <div class = "barchart">${dataYapisi[i].data}</div>
              
    `);
    }

    console.log("test");

    $('#general_report').html(rows.join(""));
    $('#general_report').html(rows);
    console.log(rows);
    return rows;

}

