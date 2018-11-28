


function deleteContact(kontakt) {
    
  
}

function updateContact(edittedContact) {

}



function sortContacts(reportsOfKontakts) {
    reportsOfKontakts.sort();
    return reportsOfKontakts;
}

function searchingText(text) {
    return text == "erhan";
}

function searchSomething() {
    for (let i = 0; i < contacts.length; i++) {
        let splittetText = contacts[i].split("");
        //console.log(splittetText);
        for (let j = 0; j < splittetText.length; j++) {
            let splitting = splittetText.filter(searchingText);
            console.log(splitting);
            return splitting;
        }


    }
    //let searchedText = contacts.filter(searchingText); 
    // return searchedText;
}

function validateInputs(input) {}


function listeyeKontaktEkle(birKontakt) {
    let kontaktsString = localStorage.getItem("kontaktListesi");
    let reportsOfKontakts = JSON.parse(kontaktsString);
 
    if(reportsOfKontakts == undefined){
        reportsOfKontakts = new Array();
    }

    reportsOfKontakts.unshift({
            "isim": birKontakt.isim,
            "soyisim" : birKontakt.soyisim,
            "email" : birKontakt.email,
            "telefon" : birKontakt.phone1,
            "telefon" : birKontakt.phone2
    });

    kontaktsString = JSON.stringify(reportsOfKontakts);
    localStorage.setItem("kontaktListesi", kontaktsString);
   // console.log(reportsOfKontakts);

    return reportsOfKontakts;
}

