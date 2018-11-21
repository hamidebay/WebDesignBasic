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




function renderList(kontaktListesi){


 // for(let i=0; i<localStorage.length; i++){
let koList = kontaktListesi.map((kontaktObject) => ` <td>${kontaktObject.isim}</td>
                                                    <td>${kontaktObject.soyisim}</td>
                                                    <td>${kontaktObject.email}</td>
                                                    <break>
`);

$("td").html(koList.join("\n"));
}



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
        let reportsOfKontakts = listeyeKontaktEkle(kontakt);
        renderList(reportsOfKontakts);
       /* kontaktlariSonsuzaKadarKaydet(kontakt);
        sortContacts(contacts);
        let kontaktlar = localStorage.data;
        kayitliKontaktlariGetir(kontaktlar);
        kontaktlariEkranaYaz(kontakt);
*/
    });


    $('#save').on('click', function () {

    });

    $('#delete').on('click', function () {

    });


    function editContact(kontakt){
    $('td').on('click', function () {
        $('#firstname').html(this.isim);
        $('#lastname').html(this.soyisim);
        $('#Email').html(this.email);
        $('#Phone1').html(this.phone1);
        $('#Phone2').html(this.phone2);

        let newName = isim;
        let newLastName = soyisim;
        let newEmail = email;
        let newPhone1 = phone1;
        let newPhone2 = phone2;
        updateContact(kontakt);

        return {isim, soyisim, email, phone1, phone2};

    })}

    /*function kayitliKontaktlariGetir(kontakt) {
        for (let i = 0; i < localStorage.length; i++) {
            let kayitliKontaktlar = sonuclariGetir(kontakt);
            return kayitliKontaktlar;
        } }
*/
   


 



})