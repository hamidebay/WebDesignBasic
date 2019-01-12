


// "A" = Sisirilmemis;
// "B" = patlamis;

const BALON_EBAT = ["S", "M", "L", "XL", "XXL"];


class BALON {

    

    constructor(ebat, renk) {
        status = new BALON_STATE();
        this.ebat = ebat;
        this.renk = renk;
        this.state = status.DOKUNULMAMIS;
        this.location = null;
    }


    patla() {
        this.state = status.PATLAMIS;

    };

    sis() {

        random
        this.state =  status.SISIRILMIS;
    } 

    hareketEt(pLocation) {
       
        this.location = pLocation;

    }

}