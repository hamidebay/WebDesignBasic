


class Ballon {

    constructor(pColor, pSize, pLocation) {
        this.color = pColor;
        this.size = pSize;
        this.location = pLocation;
        this.state = BALLON_STATE.RAW;
    }

    blowout(){
        this.state = BALLON_STATE.BLOWNOUT;
        this.size = SIZE._;
        return this;
    }

    blowup(){
        this.state = BALLON_STATE.BLOWNUP;
        return this;
    }

    move(pLocation){
        this.location = pLocation;
        return this;
    }
}


// örnek
let bl1 = new Ballon(COLOR.RED, SIZE.M, new Location(30, 10));
const bl2 = new Ballon(COLOR.BLUE, SIZE.XXL, new Location(100, 900));