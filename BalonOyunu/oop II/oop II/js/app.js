



// Main Program......

const okkesAbi = new StreetCleaner();
const margharettenPark = new Park(okkesAbi, 1000, 600);
const nurullah = new Child( "nurullah", 4);
const murat = new Child("murat", 2);
const haydarAbi = new BallonSeller(457);


murat.addBallons(
    haydarAbi.giveMeBallons(
        murat.howmanyBallons()));


nurullah.addBallons(
    haydarAbi.giveMeBallons(
        nurullah.howmanyBallons()));


margharettenPark.randomizeBallons(nurullah.handoverBallons());
margharettenPark.randomizeBallons(murat.handoverBallons());

let blownoutsBallons =
        margharettenPark.findBallons(new Location(100, 100), new Location(400, 600))
                        .map(ballon => ballon.blowout());


okkesAbi.collect(blownoutsBallons);
okkesAbi.empty();


