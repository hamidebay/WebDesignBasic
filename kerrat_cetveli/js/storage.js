

function sonuclariSonsuzaKadarKaydet(report)
{
    let cocukIsmi = report[0].data;
    let reportsString = localStorage.getItem(cocukIsmi);
    let reportsOfOneChild = JSON.parse(reportsString);
           
    if(reportsOfOneChild){
        reportsOfOneChild.push(report);
    }else{
        reportsOfOneChild = [report]; 
    }

    localStorage.setItem(cocukIsmi, JSON.stringify(reportsOfOneChild));

  
}
