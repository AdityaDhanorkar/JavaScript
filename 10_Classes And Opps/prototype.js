let myName = "Aditya   "

// console.log(myName.length);
// console.log(myName.truelength);

let MyHeros = ['Hanuman', 'Ganesh']

let heros= {
    Hanuman : "Gada",
    Ganesh :"Pen",

    getHanumanPower:function(){
        console.log(`Hanuman Power Is ${this.Hanuman}`);
    }
}

Object.prototype.aditya=function(){
    console.log("Aditya is present In All Object");
}

Array.prototype.sayAditya=function(){
    console.log("ARRAY PROTOTYPE");
}
// heros.aditya();
// // heros.sayAditya();
// MyHeros.sayAditya();
// MyHeros.aditya();

//Inheritance
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Aditya".trueLength();
"Raghu   ".trueLength();