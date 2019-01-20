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
        this.width = this.currentEnergy;
        this.height = 50;
        this.colorREd = "red";
        this.colorGreen = "green";
    }

    getCurrentEnergy() {
        return this.currentEnergy;
    }

    loadBattery() {
        let loading = setInterval(() => {
            this.currentEnergy += 5;
            if (this.currentEnergy >= this.maxCapacity) {
                clearInterval(loading);
                alert('Battery is full');
                this.reduceEnergy();
            }
        }, 1000);
    }

    reduceEnergy() {
        let reducing = setInterval(() => {
            this.fill();
            this.currentEnergy -= 5;
            if (this.currentEnergy === this.emptyBattery) {
                clearInterval(reducing);
                alert('Empty Battery');
                alert(this.currentEnergy);
            }
        }, 1000);

    }

    fill(){
        let color = `<div class="battery-color" style= "width: ${this.width}px; height: ${this.height}; background-color: ${this.colorGreen};"  ></div>`;
        $('div').html(color);
    }

    fillBatteryColor() {
        let batteryColor = `<section><div class="battery-color" style= "width: ${this.width}px; height: ${this.height}; background-color: ${this.colorGreen};"  ></div></section>`;
        if(this.width > 20){return wi;}
        else{
            batteryColor = `<section><div class="battery-color" style= "width: ${this.width}px; height: ${this.height}; background-color: ${this.colorREd};"  ></div></section>`;
        }
        $('section div').html(batteryColor);
    }


}