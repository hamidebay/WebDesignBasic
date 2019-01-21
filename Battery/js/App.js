let varta = new BatteryFactory();

if (varta.getCurrentEnergy() > 0) {
    varta.reduceEnergy();

}

setInterval(() => {
    $('p').html(varta.getCurrentEnergy() + "%");
    $('#battery').css({
        "width": varta.getCurrentEnergy() * 3 });
    $('#battery').html(getColor());
}, 1000);

function getColor() {
          if (varta.currentEnergy > 20) {
            $('#battery').css({
                "background-color": varta.colorGreen
            })
        } else {
            $('#battery').css({
                "background-color": varta.colorREd
            })
        }}
     //getColor();

    $('button').on('click', function () {
        varta.loadBattery();
        console.log(varta.getCurrentEnergy());
    })

