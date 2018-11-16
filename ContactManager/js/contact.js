let isim = null;
let soyisim = null;
let Email = null;
let Phone1 = null;
let Phone2 = null;

//test 2
let contacts = ["hamide", "bay", "tuncay", "ebrar", "erhan", "erhan"];

function deleteContact(isim) {

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i] === isim) {
            contacts.splice(i, 1);
        }
    }
    return contacts;
}

function updateContact(person) {

}

function sortContacts(kontakt) {
    kontakt.sort();
    return contacts;
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

function getAllContacts(contacts) {
    return contacts;
}

sortContacts(contacts);
console.log(contacts);

deleteContact("hamide");
console.log(contacts);

searchSomething();