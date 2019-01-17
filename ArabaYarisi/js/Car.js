class Car {
    constructor(pLocation) {

        this.brokeDownTime;
        this.timeToRepair;
        this.location = pLocation;
        this.ps = Math.floor((Math.random() * 1000) + 115);
        this.basicSpeed = 0.1; //per second
    }


    calculateBrokeDownTime(ps) {


        if (ps < 200) {
            brokeDownTime = 6;
        } else if (ps > 200 && ps < 300) {
            brokeDownTime = 5;
        } else if (ps > 300 && ps < 500) {
            brokeDownTime = 4;
        } else {
            brokeDownTime = 3;
        }

        return brokeDownTime;

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
        let repair = setInterval(this.repairCar, waitingTime * 1000);
        return repair;
    }


    calculateNewLocation(pLocation) {
        this.location = pLocation + this.calculateSpeed();
        return this;
    }

    moveCar() {
        let drive = this.calculateBrokeDownTime();
        let move = setInterval(Location.calculateNewLocation(pLocation), drive * 1000);
        clearInterval();
    }
}