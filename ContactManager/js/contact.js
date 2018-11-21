


function deleteContact(kontakt) {

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i] === isim) {
            contacts.splice(i, 1);
        }
    }
    return contacts;
}

function updateContact(person) {
    let kontaktsString = localStorage.getItem("kontaktListesi");
    let reportsOfKontakts = JSON.parse(kontaktsString);

    reportsOfKontakts.unshift({
        "isim": person.isim,
        "soyisim" : person.soyisim,
        "email" : person.email,
        "telefon" : person.phone1,
        "telefon" : person.phone2
});

    kontaktsString = JSON.stringify(reportsOfKontakts);
    localStorage.setItem("kontaktListesi", kontaktsString);
    sortContacts(reportsOfKontakts);

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

function getAllContacts(reportsOfKontakts) {
    
    return reportsOfKontakts;
}

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
    console.log(reportsOfKontakts);

    return reportsOfKontakts;
}


/*sortContacts(contacts);
console.log(contacts);

deleteContact("hamide");
console.log(contacts);

searchSomething();
*/