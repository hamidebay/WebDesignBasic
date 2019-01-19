/* Bir pil olusturulacak.
- Pil sarj edilebilecek.
- Dolu pil zamanla gittikce bosalacak.
- Dolu pil 100%, bos pil 0 % olacak.

*/


class BatteryFactory {
    constructor() {
         this.maxCapacity = 100;
         this.currentEnergy = 80;
         this.emptyBattery = 0;
    }

    getCurrentEnergy() {
        return this.currentEnergy;
    }

    loadBattery() {
        let loading = setInterval(() => {
            this.currentEnergy += 5;
            if(this.currentEnergy >= this.maxCapacity){
                clearInterval(loading);
                alert('Battery is full');
                this.reduceEnergy();
            }
        }, 1000);
    }

    reduceEnergy() {
        let reducing = setInterval(() => {
            this.currentEnergy -= 5;
            if(this.currentEnergy === this.emptyBattery){
                clearInterval(reducing);
                alert('Empty Battery');
                alert(this.currentEnergy);
            }
        }, 1000);

    }


}