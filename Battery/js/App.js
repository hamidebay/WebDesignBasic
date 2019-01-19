let varta = new BatteryFactory();

if (varta.getCurrentEnergy() > 0) {
    varta.reduceEnergy();

console.log(varta.getCurrentEnergy());
}

setInterval(()=> {
    $('section').html(varta.getCurrentEnergy() + "%");
}, 1000);

$('button').on('click', function () {
    varta.loadBattery();
    console.log(varta.getCurrentEnergy());
});