class Car {
    constructor() {
        let ps;
        let brokeDownTime;
        let timeToRepair;
        let location = [0, 0];
        
    }

    getRandomPS() {
        let carPs = Math.floor((Math.random() * 1000) + 115);
        return carPs;
    }

    calculateBrokeDownTime() {
       let brokeDownTime;
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
        let timeToRepair;
        if (ps < 200) {
            timeToRepair = 5;
        } else if (ps > 200 && ps < 300) {
            timeToRepair = 4;
        } else if (ps > 300 && ps < 500) {
            timeToRepair = 3;
        } else {
            timeToRepair = 2;
        }

    }

    moveCar(){
        let drive = this.calculateBrokeDownTime();
        let move =  setInterval(Location.findPosition(elem), drive*1000);
            
    }
}