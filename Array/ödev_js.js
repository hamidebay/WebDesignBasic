let haftaninGunleri = ["Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi", "Pazar"];
console.log(haftaninGunleri[2]);
console.log("");
let monate = new Array("ocak", "subat", "mart", "nisan", "mayis", "haziran", "temmuz", "agustos", "eylül", "ekim", "kasim", "aralik");
console.log(monate[5]);
console.log("");

let zahlen = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(zahlen[0]);
console.log(zahlen[Math.ceil(zahlen.length/2)]);
console.log(zahlen[zahlen.length-1]);
console.log("");

let isimler = ["Ebrar", "Erhan", "Taha", "Ilker", "Hayrunnisa", "Zeynep", "Onur"];
let arrayLength = isimler.length;
for(let index=arrayLength-1; index <= 0; index--){
    console.log(isimler[index]);
}

console.log("");
let lander = ["Türkiye", "Almanya", "Isvicre", "Fransa", "Italya", "Avusturya", "Danimarka", "USA", "Rusya", "Arabistan"];

for(let land of lander){
    console.log(land);
}
console.log("");
let days = ["Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi", "Pazar"];

days.forEach(function(aDay){
    console.log(aDay);
});

console.log("");

days.forEach(aDay => console.log(aDay));
console.log("");
console.log("");
monate.forEach(aMonth => console.log(aMonth));
console.log("");
monate.forEach(function(month){
    console.log(month)
});
