

// TYPE: Enumaration
const SIZE = {
    _: 0,
    S: 50,
    M: 100,
    L: 200,
    XL: 300,
    XXL: 400,
};

Object.defineProperty(SIZE, 'random', {
    value: function(){
        let numberOfElements = Object.keys(SIZE).length;
        let index = Math.floor(Math.random() * numberOfElements);
        return SIZE[Object.keys(SIZE)[index]];
    },
    enumerable: false
});





const COLOR = {
    GREEN: "red",
    BLUE: "blue",
    RED: "red",
    YELLOW: "yellow",
};

Object.defineProperty(COLOR, 'random', {
    value: function(){
        let numberOfElements = Object.keys(COLOR).length;
        let index = Math.floor(Math.random() * numberOfElements);
        return COLOR[Object.keys(COLOR)[index]];
    },
    enumerable: false
});




const BALLON_STATE = {
    RAW: 0,
    BLOWNUP: 1,
    BLOWNOUT: -1,
};