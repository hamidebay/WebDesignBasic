class CircularDoublyLinkedList{
    constructor(){
        this.head = new Node(null);
        this.length = null;
        this.value = value;
        this.next = null;
        this.container = new Array(capacity);
        this.start = 0;
        this.end = 0;
        this.count = 0;
    }

    add(value){
        this.container[this.end] = value;
        this.end = ++this.end % this.pCapacity;
        if(this.isFull()){
            this.start = ++this.start % this.pCapacity;
        }else{
            this.count++;
        }
        
       this.head.setNext(new Node(value));
    }

    addFirst(value){}

    addLast(value){}



    addAt(index, value){}

    remove(value){}

    removeLast(){}

    removeFirst(){}

    removeAt(index){}

    addFirst(value){}

    find(value){}

    first(){}

    last(){}

    get(index){}

    getPrevious(){}


    /*
    take(){
        if(!this.isEmpty()){
            let elemToReturn = this.container[this.start];
            this.container[this.start] = undefined;
            this.start = ++this.start % this.pCapacity;
            this.count--;
            return elemToReturn;
        }
        return null;
    }

    */

    size(){
       return this.count;
    }
    
    isEmpty(){
        return this.count === 0;
    }


    isFull(){
        return this.count === this.pCapacity;
    }

    capacity(){
        return this.pCapacity;
    }

    capacity(value){}

    iterator(){}
}