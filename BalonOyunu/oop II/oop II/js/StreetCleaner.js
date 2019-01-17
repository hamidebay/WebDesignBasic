

class StreetCleaner{

    constructor(){
        this.pack = [];
    }

    collect(pBallons){
        this.pack.concat(pBallons);
    }

    empty(){
        return this.pack.splice(0, this.pack.length);
    }
}
