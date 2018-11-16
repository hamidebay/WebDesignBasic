/*let person = {
    name: "hamide",
    lastname: "bay",
    birthday: "05.05.1979",
    babasi: {
        name: "abdurrahim",
        lastname: "adanur",
        birthday: "21.08.1942"
    },
    annesi: {
        name: "sariye",
        lastname: "adanur",
        birthday: "18.08.1937"
    },
    grandparents: [{

            name: "Müslim",
            lastname: "Adanur",
            birthday: "21.12.1902"
        },
        {
            name: "Hamide",
            lastname: "Adanur",
            birthday: "03.05.1900"
        }
    ],
    amcasi: [{
            name: "Abdulkerim",
            lastname: "Adanur"
        },
        {
            name: "Abdurrahim",
            lastname: "Adanur"
        }
    ],
    halasi: {
        name: "Cemile",
        lastname: "Adanur"
    },
    teyzesi: [{
            name: "Fatma",
            lastname: "Adanur"
        },
        {
            name: "Ayse",
            lastname: "Adanur"
        }
    ],
    dayisi: [{
            name: "ömer",
            lastname: "Adanur"
        },
        {
            name: "Ali",
            lastname: "Adanur"
        },
        {
            name: "hasan",
            lastname: "adanur"
        }
    ],
    children: [{
            name: "ebrar",
            lastname: "bay",
            birthday: "14.10.2003",
            esi: {
                name: "berlirsiz",
                lastname: "bilinmez"
            }
        },

        {
            name: "erhan",
            lastname: "bay",
            birthday: "21.12.2012",
            esi: {
                name: "ask",
                lastname: "mantik"
            }
        }
    ],

    torunlar: [{
            name: "esra",
            lastname: "bay",
            birthday: "01.01.2018"
        },
        {
            name: "hayal",
            lastname: "bay",
            birthday: "02.02.2018"

        }
    ],
    kuzenler: [{
            name: "ayse",
            lastname: "caliskan"
        },
        {
            name: "muhammet",
            lastname: "adanur"
        },
        {
            name: "azize",
            lastname: "adanur"
        }
    ]

}

console.log("isim: ", person.name);
console.log("soyisim: ", person.lastname);
console.log("dogum tarihi: ", person.birthday);
console.log("ana adi: ", person.annesi.name);
console.log("baba adi: ", person.babasi.name);
console.log("ilk cocuk isim: ", person.children[0].name);
console.log("ikinci cocuk esinin ismi: ", person.children[1].esi.name);
console.log("ikinci dayi soyisim: ", person.dayisi[1].lastname);
console.log("birinci amcanin ismi: ", person.amcasi[0].name);
console.log("ikinci amcanin ismi: ", person.amcasi[1].name);
console.log("dede isim: ", person.grandparents[0].name);
console.log("nine dogum tarihi: ", person.grandparents[1].birthday);
console.log("birinci torun tüm bilgiler: ", person.torunlar[0]);
console.log("ikinci torun : ", person.torunlar[1].name);
console.log("hala isim: ", person.halasi.name);
console.log("teyzeler: ", person.teyzesi[0].name);
console.log("teyze 2 soyisim: ", person.teyzesi[1].lastname);
console.log("isim: ", person.name);
console.log("kuzen 1: ", person.kuzenler[0]);
console.log("kuzen 2 isim: ", person.kuzenler[1].name);

if(person.phoneNumbers)
*/

/*let person = [{
        "id": "5b408fc8440e46c233028d72",
        "isActive": true,
        "balance": "$2,726.46",
        "age": 26,
        "eyeColor": "green",
        "name": "Chandler Swanson",
        "gender": "male",
        "company": "ZEDALIS",
        "email": "chandlerswanson@zedalis.com",
        "phone": "+1 (948) 525-2488",
        "address": "922 Preston Court, Colton, Palau, 4078",
        "friends": [{
                "id": 0,
                "name": "Daugherty Hodges"
            },
            {
                "id": 1,
                "name": "Velez Oneill"
            },
            {
                "id": 2,
                "name": "Lavonne Wheeler"
            }
        ]
    },
    {
        "id": "5b408fc84ce214bb898e9376",
        "isActive": false,
        "balance": "$2,134.92",
        "age": 33,
        "eyeColor": "blue",
        "name": "French Campbell",
        "gender": "male",
        "company": "ADORNICA",
        "email": "frenchcampbell@adornica.com",
        "phone": "+1 (922) 404-2948",
        "address": "619 Railroad Avenue, Cecilia, Tennessee, 6853",
        "friends": [{
                "id": 0,
                "name": "Garner Fleming"
            },
            {
                "id": 1,
                "name": "Whitfield Faulkner"
            },
            {
                "id": 2,
                "name": "Phillips Guerrero"
            }
        ]
    },
    {
        "id": "5b408fc8babd49794c54aa3c",
        "isActive": true,
        "balance": "$3,864.05",
        "age": 25,
        "eyeColor": "green",
        "name": "Lilian Rosario",
        "gender": "female",
        "company": "FIBEROX",
        "email": "lilianrosario@fiberox.com",
        "phone": "+1 (995) 479-2884",
        "address": "498 Wythe Place, Flintville, Oklahoma, 8539",
        "friends": [{
                "id": 0,
                "name": "Wade Dudley"
            },
            {
                "id": 1,
                "name": "Ramsey Short"
            },
            {
                "id": 2,
                "name": "Eve Phelps"
            }
        ]
    },
    {
        "id": "5b408fc872a642e566d6adb9",
        "isActive": false,
        "balance": "$3,879.66",
        "age": 24,
        "eyeColor": "blue",
        "name": "Ferrell Greer",
        "gender": "male",
        "company": "LIMAGE",
        "email": "ferrellgreer@limage.com",
        "phone": "+1 (981) 560-2068",
        "address": "358 Adler Place, Maury, Maryland, 2929",
        "friends": [{
                "id": 0,
                "name": "Pam Blackburn"
            },
            {
                "id": 1,
                "name": "Elisabeth Ward"
            },
            {
                "id": 2,
                "name": "Jefferson Munoz"
            }
        ]
    },
    {
        "id": "5b408fc826b601415a3fbdb7",
        "isActive": true,
        "balance": "$2,174.92",
        "age": 34,
        "eyeColor": "blue",
        "name": "Effie Skinner",
        "gender": "female",
        "company": "MAGNEATO",
        "email": "effieskinner@magneato.com",
        "phone": "+1 (943) 452-3591",
        "address": "682 Bokee Court, Callaghan, Delaware, 2665",
        "friends": [{
                "id": 0,
                "name": "Cathryn Sparks"
            },
            {
                "id": 1,
                "name": "Shepherd Park"
            },
            {
                "id": 2,
                "name": "Carrie Kerr"
            }
        ]
    },
    {
        "id": "5b408fc8fbc8f02dc57296d9",
        "isActive": false,
        "balance": "$1,226.53",
        "age": 20,
        "eyeColor": "brown",
        "name": "Morgan Harris",
        "gender": "female",
        "company": "COMVERGES",
        "email": "morganharris@comverges.com",
        "phone": "+1 (946) 564-2332",
        "address": "508 Moore Street, Kilbourne, North Dakota, 4715",
        "friends": [{
                "id": 0,
                "name": "Mills Cantrell"
            },
            {
                "id": 1,
                "name": "Betsy Knox"
            },
            {
                "id": 2,
                "name": "Harvey Campos"
            }
        ]
    },
    {
        "id": "5b408fc8ab348335201c6a41",
        "isActive": true,
        "balance": "$3,104.42",
        "age": 38,
        "eyeColor": "blue",
        "name": "Yvonne Ball",
        "gender": "female",
        "company": "PETIGEMS",
        "email": "yvonneball@petigems.com",
        "phone": "+1 (832) 577-2283",
        "address": "641 Balfour Place, Dundee, Washington, 8651",
        "friends": [{
                "id": 0,
                "name": "Shelton Shannon"
            },
            {
                "id": 1,
                "name": "Maryellen Boyle"
            },
            {
                "id": 2,
                "name": "Townsend Whitfield"
            }
        ]
    }
]


function greenColors(p) {
    return p.eyeColor == "green";
}
console.log("kac kisinin gözü yesil: " + person.filter(greenColors).length);

function malesBigger(person) {
    return person.age >= 30 && person.gender == "male";
}
console.log("Yasi 30 dan büyük olan erkekler: " + person.filter(malesBigger).length);

let myMap = 
person.filter(p => p.gender == "female" && p.age < 30)
      .map(p => p.name)
      .join(" , ");

console.log("Yasi 30 dan kücük olan bayanlarin isimleri: "+ myMap);

const reducer = (accumulator, currentValue) => (accumulator+currentValue);

let ageList = 
    person.filter(p => +p.balance.replace("$", "").replace(",", "") > 2000.00 && p.gender == "female")
    .map(p => p.age);
     
    let average = ageList.reduce(reducer)/ageList.length;
console.log(average);
*/

let company = {
"name": "baycom",
"office": [{"name":"luzern",
            
}]
}