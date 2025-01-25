
function hide_fun() {
    document.getElementById('demo').style.display = 'none';
}
function show_fun() {
    document.getElementById('demo').style.display = 'none';
}


// Starting This Keyborad 

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        console.log(' ---> ', this, '--->');
        return this.firstName + " " + this.lastName;

    },
    fullName2: () => {
        console.log(' ---> ', this, '--->');
        return this.firstName + " " + this.lastName;

    },
    whatIsThis: this
};

// console.log(person.firstName, person.lastName, person.id, person.whatIsThis, this);
// console.log('i am caling fullName Function here --->>>', person.fullName(), person.fullName2);
// console.log('first function ', person.fullName());
// console.log('second function ', person.fullName2());

function myFunction() {
    return this;
}

let a = myFunction()
console.log(a);