function generateUserOption(userName, passWort) {
    let userOptionDataYapisi = [
        {"User": "userName"},
        {"Passwort" : "passWort"}
    ];

    let userListe = [];
 
    userListe.push(`
    <select>
        <option>${userName}</option>
    </select>
    ` );

    $('#userList').html(userListe.join(""));
    //document.getElementById('sonuc_modal').showModal();

    return userOptionDataYapisi;
}