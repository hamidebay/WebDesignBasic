/**
* UI Logic (Controller)
*/

$(document).ready(function(){

    $('#game-area span').on('click', function(){
        let bastigimKutununLokasyonu = $(this).attr("coordinate");
        hamleYap(bastigimKutununLokasyonu);
    });
})

