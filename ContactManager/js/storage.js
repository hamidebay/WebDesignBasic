function kontaktlariSonsuzaKadarKaydet(kontakt)
{
    let isim = kontakt.isim;
    let kontaktsString = localStorage.getItem(isim);
    let reportsOfKontakts = JSON.parse(kontaktsString);
           
    if(reportsOfKontakts){
        reportsOfKontakts.push(kontakt);
    }else{
        reportsOfKontakts = [kontakt]; 
    }

    localStorage.setItem(isim, JSON.stringify(reportsOfKontakts));
    //localStorage.clear();
    console.log(localStorage);
}

function sonuclariGetir(kontakt){
    for(let i=0; i<localStorage.length; i++){
    let kontakssString = localStorage.getItem(isim);
    let reportsOfKontakts = JSON.parse(kontakssString);

    return reportsOfKontakts;
    }
}