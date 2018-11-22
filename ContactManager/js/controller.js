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
        koList = kontaktListesi.map((kontaktObject) => `<tr id="second"><div id="contacts">
                                                           <td id=""kontakt_"${koList.indexOf(this)}">${kontaktObject.isim}</td>
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
        renderList(reportsOfKontakts);

    });


    $('#save').on('click', function () {
        // updateContact(person);
    });

    $('#delete').on('click', function () {

    });


    function getKontaktFromList() {
        /*$('#second').on('click', function(){
            let datesOfKontakt = {"isim":this.isim, "soyisim": this.soyisim, "email": this.email, "phone1": this.phone1, "phone2": this.phone2};
            return datesOfKontakt;
*/
        printKontaktOnScreen(dates);
        return Array.from($("#second"))
            .map(function (inputElm) {
                return {
                    index: +$(inputElm).attr("id").replace("contact_", ""),
                    isim: $(inputElm).val(),
                    soyisim: $(inputElm).val(),
                    email: $(inputElm).val(),
                    phone1: $(inputElm).val(),
                    phone2: $(inputElm).val(),
                };
            });

    }


    function printKontaktOnScreen(datesOfKontakt) {

        $(`#contact_${renderList.koList.indexOf(this)}`).on('click', function () {
            $('#firstname').html(datesOfKontakt.isim);
        })

    }
    // let kontaktsString = localStorage.getItem("kontaktListesi");
    // let reportsOfKontakts = JSON.parse(kontaktsString);
    /*   let selectedContakt = $('#second').on('click', function () {
           let kontaktdates = updateContact(edittedContact)()

            $('#firstname').html(editContact.name);
            $('#lastname').html(lastname);
            $('#Email').html(email);
            $('#Phone1').html(phone1);
            $('#Phone2').html(phone2);

        });
        let newName = veriAl().isim;
        let newLastName = veriAl().soyisim;
        let newEmail = veriAl().email;
        let newPhone1 = veriAl().phone1;
        let newPhone2 = veriAl().phone2;

       // kontaktsString = JSON.stringify(reportsOfKontakts);
       // localStorage.setItem("kontaktListesi", kontaktsString);
        
        return {
            newName,
            newLastName,
            newEmail,
            newPhone1,
            newPhone2
        };

    editContact(editingContact);
    }

        $('save').on('click', function(){
    
        updateContact(edittedContact);
    })
    }
    
*/


    //editContact();
   //printKontaktOnScreen();
    getAllContacts();
    //selectContaktFromList();
});