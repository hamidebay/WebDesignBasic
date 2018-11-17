/*
Name: Contact Manager
Description: An app for aintaining contacts effectively

UI Interactions:
- Forma bilgiler giriyor. 
- "Yeni ekle" butonuna basinca form yeni girdiye hazir hale getirilecek.
- Kullanici arama butonuna istedigi arama kriterini girecek ve arama sonunda ilgili sonuclar tabloda gösterilecek.
  - Arama sadece "firstname" ve "lastname" üzerinden yapilacak
- "kaydet" butonu ile girilen bilgiler tabloya eklenir-ö
  - "validation" Form dogrulama kaydetme öncesinde yapilmali.
  - "sil"butonu tetiklendiginde contact tablodan kaldirilacak.
    - Silme islemi öncesi islem icin teyid istenecek.
- Tablo satirina tiklandiginda o satirin ihtiva ettigi bilgi formda gösterilecek.
- Input fieldlerin sag tarafinda bulunan arti iconu yeni bir input alani eklenmesini tetikler (email, phone, addres)
- Table headerlarina basildiginda o headera göre siralama yapilmasi lazim.

*/



$(document).ready(() => {

    function veriAl() {
        let isim = $('#firstname').val();
        let soyisim = $('#lastname').val();
        let email = $('#Email').val();
        let phone1 = $('#Phone1').val();
        let phone2 = $('#Phone2').val();
        let searchingText = $('#select').val();

        return {
            isim,
            soyisim,
            email,
            phone1,
            phone2,
            searchingText
        };
    }

    $('#add').on('click', function () {
        //let kontaktname = veriAl.isim;
        //addNewContact(kontaktname);
        let kontakt = veriAl();
        kontaktlariSonsuzaKadarKaydet(kontakt);
        sortContacts(contacts);
        let kontaktlar = localStorage.data;
        kayitliKontaktlariGetir(kontaktlar);
        kontaktlariEkranaYaz(kontakt);

    });


    $('#save').on('click', function () {

    });

    $('#delete').on('click', function () {

    });

    function kayitliKontaktlariGetir(kontakt) {
        for (let i = 0; i < localStorage.length; i++) {
            let kayitliKontaktlar = sonuclariGetir(kontakt);
            return kayitliKontaktlar;
        }

    }

    function kontaktSonuclari(kontakt) {
        let kontaktsString = localStorage.getItem(isim);
        let reportsOfKontakts = JSON.parse(kontaktsString);
        return reportsOfKontakts;
    }

    function kontaktlariEkranaYaz(kontaktlar) {
        let kontaktDataYapisi = [{
                label: "Isim",
                data: kontakt.isim
            },
            {
                label: "Soyisim",
                data: kontakt.soyisim
            },
            {
                label: "Email",
                data: kontakt.email
            },

        ];

        let rows = [];
        for (let j = 0; j < kontaktlar.length; j++) {
            for (let i = 0; i < kontaktDataYapisi.length; i++) {
                rows.push(`
                        <td>${kontaktDataYapisi[i].data}</td>
                        `);
            }
            $('td').html(rows.join(""));
            return kontaktDataYapisi;
        }
    }




})