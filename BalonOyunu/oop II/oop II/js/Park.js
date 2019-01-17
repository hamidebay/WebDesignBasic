class Park {

    constructor(pStreetCleaner, pWidth, pHeight) {
        this.streetcleaner = pStreetCleaner;
        this.width = pWidth;
        this.height = pHeight;
        this.ballons = [];
    }

    calculateBallonsByState(pBallonState) {
        return this.ballons.filter(ballon => ballon.state === pBallonState).length;
    }

    randomizeBallons(pBallons) {
        let locatedBallons = pBallons.map( ballon => ballon.move(this.generateRandomLocation()));
        this.ballons.concat(locatedBallons);
    }

    findBallons(pLocation1, pLocation2){
        return [];
    }


    generateRandomLocation(){
        const left = Math.floor(Math.random() * this.width);
        const top = Math.floor(Math.random() * this.height);
        return new Location(left, top);
    }

}





