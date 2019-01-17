


class BallonSeller {

    constructor(pTotalAmount) {
        this.ballons = new Array(pTotalAmount)
                            .fill(0)
                            .map( () => new Ballon(COLOR.random(), SIZE.random(), new Location(0, 0)));
    }

    giveMeBallons(pNumberOfBallons){
        return this.ballons
                .splice(0, pNumberOfBallons)
                .map( ballon => ballon.blowup());
    }

    haveEnoughBallons(pNumberBallons){
        return this.ballons.length >= pNumberBallons;
    }
}