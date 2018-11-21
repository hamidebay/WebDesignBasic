/*
UI Intercations:
- 
- 
- 
*/

/**
 * Kalem listesini itere ederek her kalemi index.html'de tanimlanmis olan
 * "<li>" TAG'ine cevirir.
 * 
 *
 *  ALT -1:
    let liList = [];
    for(let i=0; i<kalemListesi.length; i++){
        liList.push(
            `<li>
                ${kalemListesi[i]} <sup class="finish">x</sup>
            </li>
            `
        );
    }
    
    ALT 2:
    let html = 
        kalemListesi
            .reduce((cum, kalem)=> cum + `<li>${kalemListesi[i]} <sup class="finish">x</sup></li>`, "");

 * @param {*} kalemListesi 
 */
function renderList(kalemListesi){
    let liList = 
        kalemListesi
            .map( (kalemObject) => `
                                    <li data-name="${kalemObject.name}"
                                        class="${kalemObject.finished==true ? 'finished' : ''}">
                                        ${kalemObject.name} <sup class="remove">x</sup>
                                    </li>
                                  `);
    $("#list_container ul").html(liList.join(""));
}


$(document).ready(() => {

    $("input[type=image]").on("click", function(){
        // eklenen alisveris esyasini listeye ekle
        let alisverisListesiKalemi = $("#girdi").val(); 
        $("#girdi").val(""); 
        let liste = alisverisListesineKalemEkle(alisverisListesiKalemi);

        renderList(liste);
    });

    $("#list_container").on("click", "li", function(){
        // alisveris sepetine konulan esyayi isaretle   
        let kalemIsmi = $(this).data("name");  
        let liste = kalemiHalledilmisSay(kalemIsmi);

        renderList(liste);
     });

    $(".remove").on("click", function(){
       // alisveris sepetine konulan esyayi kaldir     
       
    });
});