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

        let lanes = [];
        let laneValues = veriAl();
        for (let i = 0; i < laneValues.countLane; i++) {
            lanes.push(`
            <div id="lane_${i}" class="lane" style="width:${laneValues.trackLength}px">
                <div id="car_${i}" class="car"></div>
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



 function generateCars() {
        let cars = [];
        let carValues = veriAl();
        for (let i = 0; i < carValues.countLane; i++) {
            let car = "car" + cars[i];
            car = new Car();

            return car;
        }


    }

    $("#submit").click(function () {
        let hamide = new User(3, 500);
        generateCars();
        generateLanes();
        $('#raceTrack').append("<button>Start</button>");
        $('button').on("click", function () {
        generateCars.moveCar();
     
            
    
        })
    });

  

});