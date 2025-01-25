
function hide_fun() {
    document.getElementById('demo').style.display = 'none';
}
function show_fun() {
    document.getElementById('demo').style.display = 'none';
}


// const object1 = {
//     a: 'somestring',
//     b: 42,
// };

// // for (const [key, value] of Object.entries(object1)) {
// //     console.log(`Key - ${key}: Value - ${value}`);
// // }
// console.log(Object.entries(object1));
// const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// const arrayLike = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// // getFoo is a non-enumerable property
// const myObj = Object.create(
//     {},
//     {
//         getFoo: {
//             value() {
//                 return this.foo;
//             },
//         },
//         getdata:{
//             value(){
//                 return this.data
//             }
//         }
//     },
// );
// myObj.foo = "bar";
// console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
// console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// Strings have indices as enumerable own properties
// console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// // Other primitives except undefined and null have no own properties
// console.log(Object.entries('100')); // []

// let a, b, rest;
// [a, b] = [10, 20];

// console.log('a is this ', a);
// // Expected output: 10

// console.log('b is this ', b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(a, b, rest);
// Expected output: Array [30, 40, 50]

// const x = [1, 2, 3, 4, 5];
// const asa = ['one', 'two', 'three', 'four', 'five ', 'six']
// const [on, tw, th, fr, fv, sx] = asa;
// // const [b, c, d, e, f, g, h, i, j, k] = a;
// // const [y, z] = x;
// // console.log(y); // 1
// // console.log(z); // 2
// // console.log('at the last is mine ', b, c);
// console.log('my code for array ', on, tw, th, fr, fv, sx);
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b);
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

// const obj = { a: 1, b: { c: 2 } };
// const { a, b: { c: d }, } = obj;
// // Two variables are bound: `a` and `d`
// console.log(a);
// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`
// console.log(a, b);

// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined }; // b is 2
// const { c = 22 } = { c: null }; // c is null
// // const { d = console.log("hey") } = { b: 2 };
// console.log(a, b, c);
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(a, others); // { b: 2, c: 3 }

// const [first, ...others2] = [1, 2, 3];
// console.log(first, others2); // [2, 3]
// let a = 1;
// let b = 3;
// console.log(typeof a);
// console.log(typeof b);

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1, 3, 2]
// function f() {
//     return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3
// const [c] = f();
// console.log(c); // 1
// [, ,] = f();

// const [a, b, ...{ length }] = [1, 2, 3];
// console.log(a, b, length); // 1 2 1

// const [a, b, ...[c, d]] = [1, 2, 3, 4];
// console.log(a, b, c); // 1 2 3 4
// const obj = { 0: "a", 1: "b", 'c': 2 };
// const [a, b, c] = obj;
// // TypeError: obj is not iterable
// console.log(a, b);
// const user = {
//     id: 42,
//     isVerified: true,
// };

// const { id, isVerified } = user;

// console.log(id, 'same with isVerified', isVerified); // 42
// console.log(isVerified); // true
// const o = { p: 42, q: true };
// const { p: foo, q: bar } = o;
// // const { p, q } = o;
// // console.log(p, q);
// console.log(foo); // 42
// console.log(bar); // true
// const user = {
//     id: 42,
//     displayName: "jdoe",
//     fullName: {
//         firstName: "Jane",
//         lastName: "Doe",
//     },
// };

// console.log(user.id, user.displayName, user.fullName.firstName,
//     user.fullName['lastName']);
// const user = {
//     id: 42,
//     displayName: "jdoe",
//     fullName: {
//         firstName: "Jane",
//         lastName: "Doe",
//     },
// };

// function userId({ displayName }) {
//     return displayName;
// }

// console.log(userId(user)); // 42

// function drawChart(
//     {
//         size = "big",
//         coords = { x: 0, y: 0 },
//         radius = 25,
//     }) {
//     console.log(size, coords, radius);
// }
// let a, b, c;
// const d = ({
//     a: Hello,
//     b: Jellow,
//     c: Cellow
// }) => {
//     console.log(a, Jellow, Cellow);
// }
// d()

// drawChart({
//     coords: { x: 18, y: 30 },
//     radius: 30,
// });

const metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: "de",
            localizationTags: [],
            lastEdit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung",
        },
    ],
    url: "/en-US/docs/Tools/Scratchpad",
};

const {
    title: newTitle,
    translations: [
        {
            title: againNewTitle,
            locale: newLocal,
            localizationTags: newLocalizationTags,
            lastEdit: newLastEdit,
            url: againNewUrl,
        },
    ],
    url: newUrl,
} = metadata;

console.log(newTitle); // "Scratchpad"
console.log(againNewTitle); // "JavaScript-Umgebung"
console.log(newUrl, againNewUrl, againNewTitle, newLastEdit, newLocalizationTags); // "JavaScript-Umgebung"