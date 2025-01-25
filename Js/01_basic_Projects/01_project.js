let ar = [
    '{ "id": 1, "product": "Laptop", "quantity": 2, "price": 800 }',
    '{ "id": 2, "product": "Phone", "quantity": 3, "price": 300 }',
    '{ "id": 3, "product": "Desktop", "quantity": 13, "price": 33300 }',
    '{ "id": 4, "product": "Tablet", "quantity": 113, "price": 30000 }',
    '{ "id": 5, "product": "Ipad", "quantity": 31, "price": 300000 }',
    ' { "id": 6, "product": "Laptop Cover", "quantity": 30, "price": 38900 }',
    '{ "id": 7, "product": "Laptop Saver", "quantity": 32, "price": 30550 }',
    '{ "id": 8, "product": "Phone Cover", "quantity": 53, "price": 3050 },'
]

// console.log(typeof ar);
// let jAr = JSON.stringify(ar);
// console.log(typeof jAr);
// let b = JSON.parse(jAr)
// console.log(typeof b);
// // console.log(jAr);
// ar.forEach(element => {
//     console.log(element);
// });
// jAr.forEach(element => {
//     console.log(element);
// });
// myJSON = '{"name":"John", "age":30, "car":null}';
// // console.log(typeof myJSON);
// // console.log(myJSON);

// myObj = JSON.parse(myJSON);
// // console.log(typeof myObj);
// // console.log(myObj);

// for (const key in myObj) {
//     console.log(key);
// }

// this is javascript array 
let ary = ['one', 'two', 'three', 'four', 'five', 'six', 'sever', 'eight', 'nine', 'ten']

let myJSON = '["Ford", "BMW", "Fiat"]';

// console.log(typeof myJSON);
let arObj = [
    {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    },
    "John", 55, "Maruti-Car"
]

// console.log(arObj[0]['name']);
// console.log(arObj[1]);
// for (const element of arObj) {
//     console.log(element);
// }
// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// // for (let i = 0; i < items.length; i++) {
// //     copyItems.push(items[i]);
// //     // console.log(copyItems);
// // }
// const a = (data) => console.log(data);
// // after
// items.forEach((data) => {
//     // copyItems.push(data);
//     // console.log(data['2']);
// });
// console.log(typeof items);
// console.log(copyItems);
// console.log(a());

let a = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]
// console.log(a[0]['name']);
// console.log(a[1]['name']);
let obj = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}

let fst = obj.members[0];
let fst2 = obj.members[1];
let fst3 = obj.members[2];
// console.log(fst);
// console.log(fst2);
// console.log(fst3);
fst.forEach(element => {
    console.log(element);
});