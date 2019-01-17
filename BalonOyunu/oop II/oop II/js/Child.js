


class Child {

    constructor(pName, pNumberOfBallos) {
        this.name = pName;
        this.numberOfBallons = pNumberOfBallos;
        this.ballons = [];
    }

    howmanyBallons(){
        return this.numberOfBallons;
    }

    addBallons(pBallons){
        this.ballons.concat(pBallons);
    }

    handoverBallons(){
        return this.ballons;
    }
}
