class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }

    getNext(){
        return this.next;
    }

    setNext(pNode){this.next = pNode;}

    getPrevious(){
        return this.previous;
    }

    setPrevious(pNode){
        this.previous = pNode;
    }

    getElement(){
        return this.value;
    }

    setElement(value){
        this.value = value;
    }
}