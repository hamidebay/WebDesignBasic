let person = {
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