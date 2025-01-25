
function hide_fun() {
    document.getElementById('demo').style.display = 'none';
}
function show_fun() {
    document.getElementById('demo').style.display = 'none';
}


// const fruits = ["Apple", "Banana"];
// const fruits_new = ["Apple", "Banana", "Mango"];
// console.log(typeof fruits_new);
// console.log(typeof fruits);
// const fruitsString = fruits.join(", ");
// console.log(fruitsString);
// console.log(typeof fruitsString);
// "Apple, Banana"



// console.log(fruits);
// console.log(typeof fruits);
// // The index of an array's first element is always 0.
// console.log(fruits[0]); // Apple

// // The index of an array's second element is always 1.
// // fruits[1]; // Banana
// console.log(fruits[1]);

// The index of an array's last element is always one
// less than the length of the array.
// // fruits[fruits.length - 1]; // Banana
// console.log(fruits[fruits.length - 1]);
// console.log(fruits[fruits.length - 2]);
// console.log(fruits[fruits.length - 3]);

// // Using an index number larger than the array's length
// // returns 'undefined'.
// // fruits[99]; // undefined
// console.log(fruits[-99]);
// console.log(fruits.indexOf('Apple'));
// console.log(fruits.indexOf('Banana'));
// console.log(fruits.indexOf('Mango'));
// const fruits = ["Apple", "Banana", 'Mango', 'Graps', 'Watermillion'];
// fruits.push('Bortengha');
// fruits.push('Licky');
// fruits.push('Tamul');
// console.log(fruits.length);
// // console.log(fruits.pop());
// console.log(fruits.splice(-7).reverse());
// console.log(fruits.splice(-7));
// console.log(fruits);
// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// console.log(fruits);
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(3);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// ["Apple", "Strawberry", "Cherry"]

// const fruits = ["Apple", "Banana"];
// console.log(fruits);
// // const removedItem = fruits.shift();
// // console.log(fruits);
// // // ["Banana"]
// // console.log(removedItem);
// // Apple
// fruits.unshift('dataOne');
// console.log(fruits);

// const fruits = ["Apple", "Banana", "Strawberry", 'Mango'];
// const start = -2;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry", 'Jerry');
// console.log(fruits);
// console.log(removedItems);
// ["Banana", "Strawberry"]

// for (let fruit of fruits) {
//     console.log(fruit);
// }
// fruits.forEach((element) => {
//     console.log(element.length), element
// });
// fruits.forEach((item, index, array) => {
//     console.log(item, index);
// });

// fruits.forEach(element => {
//     console.log(element);
// });
const fruits = ["Apple", "Banana", "Strawberry"];
console.log('real fruits', fruits);
const moreFruits = ["Mango", "Cherry"];
console.log('moreFruits ', moreFruits);
fruits.push('graps')
fruits.push('watermillion')
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
let newOne = new Array('One', 'Two', 'Three', 'Four', 'Five')
console.log('This is new one again ', combinedFruits.concat(newOne));
let againTwo = [...combinedFruits, ...newOne]
console.log('again new one here', againTwo);
againTwo.forEach((index, item) => {
    console.log(index, item);
});

// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
// console.log(fruits);
// // ["Apple", "Banana", "Strawberry"]

// // The 'moreFruits' array also remains unchanged.
// console.log(moreFruits);
// // ["Mango", "Cherry"]
