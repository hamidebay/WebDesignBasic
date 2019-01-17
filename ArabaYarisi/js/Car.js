class Car {
    constructor() {
       
         this.brokeDownTime;
         this.timeToRepair;
         this.location = [0, 0];
         this.ps = Math.floor((Math.random() * 1000) + 115);
         this.basicSpeed = 0.1;  //per second

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
    }

    moveCar() {
        let drive = this.calculateBrokeDownTime();
        let waiting = this.calculateRepairTime();
        let move = setInterval(Location.findPosition(elem), drive * 1000);
        clearInterval();
        let repair = setInterval(this.repairCar, waiting * 1000);

    }
}