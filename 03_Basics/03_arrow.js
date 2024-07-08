const user = {
    UserName :"Aditya",
    Price : 1200,

    welCome : function(){
        // console.log(`Welcome ${this.UserName} to my Code World and Price is ${this.Price}`);
        // console.log(this);
    }
}
user.welCome()
user.UserName ="Raghu"
user.welCome()

// console.log(this);

function chai(){
    let name = "Aditya"
    console.log(this.name)
}
// const chai = function(){
//     let name = "Aditya"
//     console.log(this);
// }

//Arrow Funnctions
// const chai = () => {
//     let name = "Aditya"
//     console.log(this);
// }

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// const addTwo = (num1 , num2) => ( num1 + num2)

const addTwo = (num1 , num2) => ({userName:"Raghu"})

// console.log(addTwo(3 , 5));