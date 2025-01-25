
function hide_fun() {
    document.getElementById('demo').style.display = 'none';
}
function show_fun() {
    document.getElementById('demo').style.display = 'none';
}

// Working with JSON 

// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.birth = new Date(obj.birth);

// // document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
// console.log(obj.name, obj.birth);
// console.log(text);
// console.log(typeof text);
// console.log(typeof obj);
// console.log(typeof obj.birth);
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text, function (key, value) {
//     if (key == "birth") {
//         return new Date(value);
//     } else {
//         return value;
//     }
// });

// // document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
// console.log(obj.name, obj.birth);
// const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");
// console.log(obj.age(), obj.name);
// const obj = {name: "John", age: 30, city: "New York"};
// console.log(obj);
// console.log(typeof obj);
// console.log(typeof JSON.stringify(obj));
// console.log(JSON.stringify(obj));

// const arr = ["John", "Peter", "Sally", "Jane"];
// console.log(typeof arr);
// console.log(JSON.stringify(arr));
// console.log(typeof JSON.stringify(arr));
// Storing data:
// .........hide_fun.apply.....
// const myObj = {name: "John", age: 31, city: "New York"};
// const myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// // Retrieving data:
// let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text);
// // document.getElementById("demo").innerHTML = obj.name;
// console.log(myObj);
// console.log(myJSON);
// console.log(text);
// console.log(obj);
// ............hide_fun.apply.apply.apply.apply.apply. 
// const obj = {name: "John", today: new Date(), city : "New York"};
// const myJSON = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(obj);
// console.log(typeof myJSON);
// console.log(myJSON);
// console.log(myJSON);

const obj = { name: "John", age: function () { return 30; }, city: "New York" };
obj.age = obj.age;
console.log(obj.age());
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);
console.log(typeof obj);
console.log(obj);
console.log(obj.age);
console.log(typeof myJSON);
console.log(myJSON);