/*
Interactions:
- Inputlar doldurulacak
- "Baslat" 'a basilacak ve alistirma yüklemesi tetiklenecek.
- Butona basildiktan sonra TIMER calismaya balayacak.
- Alistirmalar yüklenecek
- Alistirmalar cözülmeye calisilacak. Cözülen alistirmanin sonucu kutucuguna yazilacak
- TIMER süresi biterse ekran donacak
- "Bitir" butonuna basilinca alistirma bitecek
- Alistirma bitince sonuclar alistirma alaninda gösterilecek
- Raporlama gösterilecek
    - Hali hazirdaki alistirmanin socunclari
    - Genel olarak simdiye kadar yapilan tüm alistirmalarin sonuclari
*/

$(document).ready(
    function(){

        $('.Baslat').on('click', () =>{
            let veriler = veriAl(); // veriler.cocukIsmi
            let alistirmaListesi = alistirmalariOlustur(veriler); // [ {carpan1: 5, carpan2: 7}, {carpan1: 2, carpan2: 8} ]
            alistirmalariEkranaYaz(alistirmaListesi);
            timerBaslat(toplamOyunSuresiAl());

            $('.alistirma_container input:first').attr("autofocus", "autofocus")
        });

        $('.Bitir').on('click', () =>{
            alistirmayiBitir();
        });

        $('.GenelRapor').on('click', () =>{
            let veriler = veriAl().cocukIsmi;
            generateGeneralReport(cocukIsmi);
        });

    $('table').on('click', () =>{
   
    })
    }
);