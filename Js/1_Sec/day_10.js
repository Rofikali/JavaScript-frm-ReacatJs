
function hide_fun() {
    document.getElementById('demo').style.display = 'none';
}
function show_fun() {
    document.getElementById('demo').style.display = 'none';
}

// Working with Control Flow

// const data = undefined;
// function checkData() {
//     if (data) {
//         return true;
//     } else {
//         // thisalert(
//         //     `Enter exactly three characters. ${data} is not valid.`,
//         // );
//         return false;
//     }
// }
// console.log(checkData());
// if (110 < 10) {
//     greeting = "Good morning";
//     console.log(greeting);
// } else if (20 < 20) {
//     greeting = "Good day";
//     console.log(greeting);
// } else {
//     greeting = "Good evening";
//     console.log(greeting);
// }


// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         console.log(day);
//         break;
//     case 1:
//         day = "Monday";
//         console.log(day);
//         break;
//     case 2:
//         day = "Tuesday";
//         console.log(day);
//         break;
//     case 3:
//         day = "Wednesday";
//         console.log(day);
//         break;
//     case 4:
//         day = "Thursday";
//         console.log(day);
//         break;
//     case 5:
//         day = "Friday";
//         console.log(day);
//         break;
//     case 6:
//         day = "Saturday";
//         console.log(day);

// switch (new Date().getDay()) {
//     default:
//         text = "Looking forward to the Weekend, I am Default here Dud";
//         console.log(text);
//         break;
//     case 6:
//         text = "Today is Saturday";
//         console.log(text);
//         break;
//     case 0:
//         text = "Today is Sunday";
//         console.log(text);
//     case 4:
//         text = 'Today is Thursday'
//         console.log(text);
// }
// switch (new Date().getDay()) {
//     case 1:
//     case 3:
//         text = "Soon it is Weekend";
//         console.log(text);
//         break;
//     case 3:
//     case 4:
//         text = "It is Weekend";
//         console.log(text);
//         break;
//     default:
//         text = "Looking forward to the Weekend";
//         console.log(text);
// }
// let x = "0";
// switch (x) {
//     case 0:
//         text = "Off";
//         console.log(text);
//         break;
//     case '1':
//         text = "On";
//         console.log(text);
//         break;
//     default:
//         text = "No value found";
//         console.log(text);
// }

// const data = 'Hello Wrold'
// switch (data) {
//     case data === true:
//         console.log(`Something is there - ${data}`);
//         break;

//     default:
//         console.log(`Something is not there - ${data}`);
//         break;
// }

// Working with For Loop 
// for (let i = 0; i < 5; i++) {
//     // text += "The number is " + i + "<br>";
//     // console.log(i);
//     i = 1 + i
//     console.log(i);
// }
// let cars = ['one', 'two', 'three', 'four', 'five', 'six']
// // let i = 0;
// // let len = cars.length;
// // let text = "";
// // for (; i < len;) {
// //     text += cars[i] + "<br>";
// //     // i++;
// //     console.log(text);
// //     i++;
// // }
// const lenthCar = cars.length;
// let countInc = 0;
// for (; countInc < lenthCar;) {
//     // const element = array[index];
//     console.log(cars[countInc]);
//     countInc++;
//     // if (count == 0) {
//     //     console.log(`count is - ${count}`);
//     //     break
//     // }
//     // else {
//     //     continue
//     // }
// }
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//     txt += value;
//     // console.log(txt);
//     console.log(numbers[value]);
// }

// const data = numbers.forEach((item) => {
//     // return item
//     console.log(item);
//     return item
// })
// console.log(data);
// const data = numbers.map((item) => {
//     // return item
//     console.log(item);
//     return item
// })
// console.log(data);
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";

// const data = (item) => {
//     item += item
//     console.log(item);
// }
// numbers.forEach(data)

// numbers.filter()
// let n = 0;
// let x = 0;
// while (n < 3) {
//     n++;
//     x += n;
//     console.log(x);
// }
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        console.log(' ---> ', this, '--->');
        return this.firstName + " " + this.lastName;

    },
    whatIsThis: this
};

console.log(person.firstName, person.lastName, person.id, person.whatIsThis, this);
console.log('i am caling fullName Function here --->>>', person.fullName());