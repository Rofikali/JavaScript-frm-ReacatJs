
// 1. ---> ### 💻 Hands - On Projects:
// 1. ** Sales Report Generator **: Generate a report with the data given in JSON format.


const studentData = `[
    {
        "username": "Roki vi",
        "age": 25,
        "class": 12,
        "rank": 5,
        "schoolName": "SMHC"
    },
    {
        "username": "Micky vi",
        "age": 22,
        "class": 12,
        "rank": 4,
        "schoolName": "SMHC"
    },
    {
        "username": "Jacky",
        "age": 23,
        "class": 12,
        "rank": 1,
        "schoolName": "SMHC"
    },
    {
        "username": "Mickle Don",
        "age": 28,
        "class": 12,
        "rank": 5,
        "schoolName": "SMHC"
    },
    {
        "username": "Mnj",
        "age": 22,
        "class": 12,
        "rank": 5,
        "schoolName": "SMHC"
    }
]`;
// const obj = studentData[0]
// console.log(typeof obj);
// console.log(typeof studentData);
// console.log(Array.isArray(studentData));
const josnData = JSON.parse(studentData)
// const obj = josnData[0]
// console.log(typeof obj);
// console.log(obj.username);
// console.log(josnData);
// console.log(typeof josnData);

josnData.forEach(element => {
    console.log(element);
});

// console.log(josnData[0]);

// josnData.forEach((element, index, jsnDta) => {
//     console.log(jsnDta[index]);
// Object.entries(jsnDta[index]).forEach((ele, ind, jDta) => {
//     Object.entries(jDta[ind]).forEach((el, id) => {
//         console.log(el, id);
//     });
// });
// });

josnData.forEach((element, index, jsonData) => {
    // if (jsonData[index]) {
    //     console.log(jsonData[index], index);
    // }
    if (jsonData[index].age === 22) {
        // console.log(index, jsonData[index]);
        Object.entries(jsonData[index]).forEach(([key, val]) => {
            console.log(key, val);
        })
    }
    // else {
    //     console.log('i am else block');
    // }
});