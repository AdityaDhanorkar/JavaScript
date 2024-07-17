// class User{
//     constructor(username , email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return(`${this.password}abc`)
//     }
//     changeUser(){
//         return(`${this.username.toUpperCase()}`)
//     }
// }

// const chai = new User("Aditya","chai@google.com",123);
// console.log(chai.encryptPassword());
// console.log(chai.changeUser());

//Behind The Scene
function User(username , email,password){
        this.username=username;
        this.email=email;
        this.password=password;
}
User.prototype.encryptPassword=function(){
    return(`${this.password}abc`)
}
User.prototype.changeUser=function(){
    return(`${this.username.toUpperCase()}`)
}

const tea = new User("raghu","chai@google.com",123);
console.log(tea.encryptPassword());
console.log(tea.changeUser());