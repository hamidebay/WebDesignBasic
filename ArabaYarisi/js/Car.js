class Car {
    constructor() {

        this.brokeDownTime;
        this.timeToRepair;
        this.location = 0;
        this.ps = Math.floor((Math.random() * 1000) + 115);
        this.basicSpeed = 0.1; //per second
    }


    calculateBrokeDownTime(ps) {


        if (ps < 200) {
            this.brokeDownTime = 6;
        } else if (ps > 200 && ps < 300) {
            this.brokeDownTime = 5;
        } else if (ps > 300 && ps < 500) {
            this.brokeDownTime = 4;
        } else {
            this.brokeDownTime = 3;
        }

        return this.brokeDownTime;

    }

    calculateRepairTime() {

        if (ps < 200) {
            timeToRepair = 5;
        } else if (ps > 200 && ps < 300) {
            timeToRepair = 4;
        } else if (ps > 300 && ps < 500) {
            timeToRepair = 3;
        } else {
            timeToRepair = 2;
        }
        return timeToRepair;
    }

    calculateSpeed() {

        let speed = this.basicSpeed * this.ps;
        return speed;
    }

    

    repairCar() {
        //do nothing, wait...
        let waitingTime = this.calculateRepairTime();
        let repair = setInterval(this.calculateRepairTime, waitingTime * 1000);
        return repair;
    }


   
    calculateNewLocation() {
        let speeds = this.calculateSpeed();
        this.location += speeds;
        return location;
    }


    moveCar() {
        /*let drive = this.calculateBrokeDownTime();
        let move = setInterval(this.calculateNewLocation, drive * 1000);
        // clearInterval();
        return move;
        */
       let newLocation = this.calculateNewLocation();
       return newLocation;
       
    }

   
}