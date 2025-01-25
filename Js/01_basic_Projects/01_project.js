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
// console.log(obj);
// console.log(typeof obj);
// console.log(obj.members);

for (const key in obj) {
    // console.log(`${key}-: ${obj[key]}`);
    // console.log(key);
    // const daa = key
    // return key
    // console.log(key);

}

// const config = {
//     host: "localhost",
//     port: 3000,
//     protocol: "http",
//     profession: "BlackHat Hacker"
// };

Object.keys(obj).forEach((key) => {
    // console.log(`${key}: ${obj[key]}`);

    // at the down i have to use arry's loop function here
    // if (key == 'members') {
    //     console.log('inside members');
    //     Object.keys(key).forEach((item) => {
    //         console.log(item);
    //     })
    // }
});

Object.values(obj).forEach((key) => {
    // console.log(`${key} :- only values i gonna see here`);
    // at the down i have to use arry's loop function here
    // if (key == 'members') {
    //     console.log('inside members');
    //     Object.keys(key).forEach((item) => {
    //         console.log(item);
    //     })
    // }
});

const env = {
    NODE_ENV: "development",
    PORT: 8000,
    DATABASE_URL: "mongodb://localhost:27017/mydb",
};

for (const [key, value] of Object.entries(env)) {
    // console.log(`${key}: ${value}`);
}

for (const element of Object.values(obj)) {
    // console.log(element);
    // console.log(obj[element]);
}


const data = {
    NODE_ENV: "development",
    PORT: 8000,
    DATABASE_URL: "mongodb://localhost:27017/mydb",
};

for (const [ky, value] of Object.entries(obj)) {
    // console.log(`${ky}: ${value}`);
}

const stats = {
    uptime: 1200,
    memoryUsage: "512MB",
    activeUsers: 42,
};

for (const value of Object.keys(obj)) {
    // console.log(value);
}



const jsonString = '{"name": "API Server", "status": "running", "uptime": "24 hours"}';
// const jsonData = JSON.parse(jsonString);

// Object.entries(jsonData).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// const jsonData = JSON.parse(jsonString)

Object.entries(obj).forEach(([key, value]) => {
    // console.log(`${key}:  ${value}`);
})


function printKeyValue(obj, prefix = "") {
    for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            // If the value is an object, recurse into it
            printKeyValue(obj[key], `${prefix}${key}.`);
        } else if (Array.isArray(obj[key])) {
            // If the value is an array, iterate through it
            console.log(`${prefix}${key}: [`);
            obj[key].forEach((item, index) => {
                console.log(`  ${prefix}${key}[${index}]`);
                if (typeof item === "object") {
                    printKeyValue(item, `${prefix}${key}[${index}].`);
                } else {
                    console.log(`    ${prefix}${key}[${index}]: ${item}`);
                }
            });
            console.log("]");
        } else {
            // If the value is a primitive, print it
            console.log(`${prefix}${key}: ${obj[key]}`);
        }
    }
}

// Call the function on the given object
// printKeyValue(obj);



function processData(data) {
    if (Array.isArray(data)) {
        console.log("Processing array:", data);
    } else {
        console.log("Data is not an array:", data);
    }
}
// processData([1, 2, 3, 'one', 'two', 'three']); // Processing array: [1, 2, 3]
// let objAry = [['hello', 'pellow', 'jellow', 44, 78],
// { name: 'admin' }];   // Data is not an array: Hell
// // processData(objAry)
// console.log(typeof objAry);
// processData("['Hello,'helo']");   // Data is not an array: Hello

let jsonData = {
    items: ["Apple", "Banana", "Cherry"],
    name: "Fruits",
    age: 28,
    address: 'lukampur, assam, 787023'
};

// for (const [element, elementData] of Object.entries(jsonData)) {
//     console.log(element, elementData);
// }


function calculateTotalPrice(products) {
    let totalPrice = 0;
    // products.forEach((product) => {
    //     totalPrice += product.price * product.quantity;
    // });
    // for (let index = 0; index < products.length; index++) {
    //     const element = products[index];
    //     // return element
    //     console.log(index, element);
    // }
    for (const key in products) {
        // console.log(key);
        // // console.log(products[key]);
        // console.log(products[key].name);
        // console.log(products[key].age);
        // console.log(products[key].powers[key]);
        // totalPrice += products[key].age * products[key].name;
        totalPrice += products[key].age * 5
        // console.log(totalPrice);
        // return totalPrice
        console.log(key);
    }
    return totalPrice;
}

console.log(calculateTotalPrice(obj.numbers));