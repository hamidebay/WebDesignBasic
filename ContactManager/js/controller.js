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

    function getAllContacts() {
        let kontakt = veriAl();
        let reportsOfKontakts = listeyeKontaktEkle(kontakt);
        renderList(reportsOfKontakts);

    };

    function renderList(kontaktListesi) {
        let koList = [];

        // for(let i=0; i<localStorage.length; i++){
        koList = kontaktListesi.map((kontaktObject) => `<tr id="first"><div id="contacts">
                                                           <td >${kontaktObject.isim}</td>
                                                           <td>${kontaktObject.soyisim}</td>
                                                           <td>${kontaktObject.email}</td>
                                                           </div>
                                                         </tr>
                                                     
       `);
        $("tr").html(koList.join(""));

    }

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

        let kontakt = veriAl();
        let reportsOfKontakts = listeyeKontaktEkle(kontakt);
        //renderList(reportsOfKontakts);

    });


    $('#save').on('click', function () {
      
    });

    $('#delete').on('click', function () {


    });


   
    getAllContacts();

});