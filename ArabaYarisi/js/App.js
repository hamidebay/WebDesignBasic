/* Bir araba yaris pisti olacak. Pistin kac kulvari olacagini kullanici belirleyecek. Her kulvarda bir araba olacak. Arabalarin belirli özellikleri olacak. 
Starta basinca arabalar bitis noktasina dogru ilerliyecek. Bitis noktasina ilk ulasan araba yarisi kazanacak.

1. Yaris pisti:
 - Baslangic ve bitis noktosi olacak
 - Istenilen sayida kulvari olacak.
 - Pistin uzunlugunu kullanicidan alacak.

2. Kulvar: 
 - Esit uzunlukta ve genislikte olacaklar. 
 - Araba basina bir kulvar olacak.
 - Kulvarlarin uzunlugu pistin uzunluguna esit olacak.

3. Araba: 
 - PS i olacak: 115 ile 1000 arasinda random bir sayi olarak belirlenecek.
 - PS arttikca hizlanma süresi kisalacak.
 - Her araba belirli bir süreden sonra bozulacak.
    - PS arttikca daha cabuk bozulacak.
 - Bozulan araba tamire gidecek:
    - PS arttikca tamir süresi kisalacak.

4. kullanici: 
 - Kac kisinin yarisacagini belirleyecek.
 - Pistin uzunlugunu belirleyecek.
 - Yarisi baslatacak.

*/


let hamide = new User(3, 500);
let formula1Pist = new RaceTrack(500, 3);
let lane1 = new Lane();
let lane2 = new Lane();
let lane3 = new Lane();
let car1 = new Car();
let car2 = new Car();
let car3 = new Car();

$(document).ready(() => {

    function veriAl() {
        let trackLength = $('#raceTrackLength').val();
        let countLane = $('#countLane').val();
        // generateLanes(countLane);
        return {
            trackLength,
            countLane
        }
    }

    function generateLanes() {

        /*   for (let i = 0; i < veriAl().countLane; i++) {
            let lane = "<div> </div>"
            $("raceTrack").append(lane);
        }
*/
        let lanes = [];
        for (let i = 0; i < veriAl().countLane; i++) {
            lanes.push(`
            <div class="lane">
                <div class="car"></div>
            </div>
            `);
        }

        $('#raceTrack').html(lanes.join(""));



        return lanes;
    }

    function playCar(car) {
        car.moveCar();
        car.repairCar();
    }

    $("#submit").click(function () {
        generateLanes();
        $('#raceTrack').append("<button>Start</button>");
    });

    $('button').click(function () {
        playCar(car1);
        playCar(car2);
        playCar(car3);
    })

});