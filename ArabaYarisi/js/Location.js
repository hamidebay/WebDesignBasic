class Location {
    constructor() {}

    findPosition(elem) {
        var LeftPos = elem.offsetLeft;
        var TopPos = elem.offsetTop;
        return {
            X: LeftPos,
            Y: TopPos
        };
    }

    
}