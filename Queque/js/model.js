class QuequeFactory{
    constructor(){
        this.quequeArray = new Array();
    
    }

    getQuequeArray(){
        return this.quequeArray;
    }

    getElem(){
        return this.elem;
    }

    enqueque(){
        this.quequeArray.push(  `
        <div class="queque-buttons" >
        `  );
        return this.quequeArray;

    }

    dequeque(){
        this.quequeArray.shift(this.elem);
        return this.quequeArray;
    }

    getEmptyQueque(){
        this.quequeArray.length = 0;
        return this.quequeArray;
    }

    getSize(){
        return this.quequeArray.length;
    }
}