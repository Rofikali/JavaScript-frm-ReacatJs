
function hide_fun() {
    document.getElementById('demo').style.display = 'none';
}
function show_fun() {
    document.getElementById('demo').style.display = 'none';
}

// const fruits = ["Apple", "Banana", "Strawberry"];
// console.log(fruits);
// const moreFruits = ["Mango", "Cherry"];
// console.log(moreFruits);
// console.log(Array.from(fruits));
// const data = [...fruits];
// console.log('from spread here ', data);
// console.log('i am slice here,  it is copy of Real Array Man ', fruits.slice());
// const combinedFruits = fruits.concat(moreFruits);
// console.log('i am combinedFruits ', combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
// console.log(fruits);
// // ["Apple", "Banana", "Strawberry"]

// // The 'moreFruits' array also remains unchanged.
// console.log(moreFruits);
// // ["Mango", "Cherry"]
// const fruits = ["Strawberry", "Mango"];
// console.log('real fruits', fruits);
// // Create a copy using spread syntax.
// const fruitsCopy = [...fruits];
// // ["Strawberry", "Mango"]
// console.log('after spread operator', fruitsCopy);

// // Create a copy using the from() method.
// const fruitsCopy2 = Array.from(fruits);
// // ["Strawberry", "Mango"]
// console.log('after array.from ', fruitsCopy2);

// // Create a copy using the slice() method.
// const fruitsCopy3 = fruits.slice();
// // ["Strawberry", "Mango"]
// console.log('After fruites.Slice ', fruitsCopy3);

// const values = [];
// // console.log(typeof values);
// for (let x = 0; x < 10; x++) {
//     values.push([2 ** x, 2 * x ** 2]);
// }
// // console.table(values);
// console.log(values);
// const person = {};
// console.log(typeof person);

// const person = {
//     name: ["John", "Smith"],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     },
//     user: {
//         fName: 'Roki',
//         lName: 'Vi',
//         isLoggedIn: false,
//         detail: {
//             state: 'Usa',
//             City: 'Karachi',
//             zip: 44444,
//             motherTng: 'Bengali'
//         }
//     }
// };

// console.log(person.name, person.name[0], person.name[1]);
// console.log(person.age);
// // console.log(person.bio);
// person.bio()
// // console.log(person.introduceSelf);
// person.introduceSelf()
// console.log(person.user.fName, person.user.lName, person.user['isLoggedIn']);
// console.log(person.user['detail']['City']);
// console.log(person.user.detail.state);
// person.age = 45;
// person["name"].last = "Cratchit", person.name['middle'] = 'Weeks';
// person["eyes"] = "hazel";
// person.nindar = 'Chlgy-Kpl'
// console.log(person);
// console.log(person["name"]["middle"]);

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name} with - ${this.name}`);
    };
}

const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
