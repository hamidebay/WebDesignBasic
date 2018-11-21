function kontaktlariEkranaYaz(kontaktlar) {
    let kontaktsString = localStorage.getItem("kontaktListesi");
    let reportsOfKontakts = JSON.parse(kontaktsString);
 
    if(reportsOfKontakts == undefined){
        reportsOfKontakts = new Array();
    }

    reportsOfKontakts.unshift({
            "isim": isim,
            "soyisim" : soyisim,
            "email" : email,
            "telefon" : phone1,
            "telefon" : phone2
    });

    kontaktsString = JSON.stringify(reportsOfKontakts);
    localStorage.setItem("kontaktListesi", kontaktsString);
    return reportsOfKontakts;
}