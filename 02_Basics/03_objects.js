//Singleton
// object.create 
//Object Literals

const sym = Symbol("key1")
// const location = Symbol("Pune")
const JsUser = {
    name:"Aditya",
    "full Name":"Raghu Patil",
    age:21 ,
    [ sym]:"key1",
    "email":"aditya@google.com",
    location:"Pune",
    designation:"Coder"
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[sym]);
// console.log(JsUser.age)
// console.log(JsUser[location])


JsUser.email = "Raghu@google.com"
// console.log(JsUser["email"]);
// console.log(JsUser);
// Object.freeze(JsUser)
// JsUser.email ="Raghu@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.designation}`)
}
console.log(JsUser.greetingTwo());