/*let arr = [1,2,3,4,5];

arr = arr.map(function(item){
    item = item *2;
    const b = 6;
    return item; 
});
console.log('arr', arr);

*/

let people = [
    {name: 'ahmet', lastname: 'bey'}, 
    {name: 'mehmet', lastname: 'dursun'},
    {name: 'ali', lastname: 'hoca'},
    {name: 'meryem', lastname: 'hanim'}
]; 

people = people.map(function(kisi){
    let age = Math.floor((Math.random() * 100) + 1);
    let name =kisi.name.split("");
    name[0] =name[0].toUpperCase();
    name = name.join("");
    let lastname =kisi.lastname.split("");
    lastname[0] =lastname[0].toUpperCase();
    lastname = lastname.join("");
    kisi.fullname = `${name} ${lastname}`;
    kisi.age = age;
    
    return kisi;
});



// arrays filter bana true yada false dönder
 people = people.filter(function(elm){
   // return elm.name === 'ahmet';
   return elm.age >= 18;
})

console.log(people);