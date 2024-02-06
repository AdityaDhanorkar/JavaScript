// console.log("A");
// console.log("d");
// console.log("i");
// console.log("t");
// console.log("y");
// console.log("a");

function myName() {
    console.log("A");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a");
}

// myName //Reference
// myName() //Execution

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2)
// }

// function addTwoNumber(number1 , number2){
//     return (number1 + number2)
// }
function addTwoNumber(number1 , number2){
    let result = number1 + number2 
    return result
}

const result = addTwoNumber(3 , 8)
// console.log("Results :" , result);

function UserLogin(username = "Patil"){
   if(!username){
    console.log(`Please Provide User Name`);
    return
   }
    return (`${username} Just Loged IN`);
} 

// console.log(UserLogin("Raghu"))
// console.log(UserLogin("Aditya"))
// console.log(UserLogin());

// function CartCalculation(num1) {
//     return num1
// }

// function CartCalculation(...num1) {
//     return num1
// }

function CartCalculation(value1 , value2 ,...num1) {
    return num1
}

// console.log(CartCalculation(200 , 400 , 500 ,1000));

const User ={
    UserLogin:"Raghu261",
    price : 199
}

function handleObject(getObject){
    console.log(`My User Name ${getObject.UserLogin} and Price ${getObject.price}`)
}

// handleObject(User)

// handleObject({
//     UserLogin:"Raghu",
//     price :3999
// })

const myArr = [200 ,400 ,600,1000]

function handleArray(getArray){
    return getArray[2]
}

// console.log(handleArray(myArr))
console.log(handleArray([200 , 400 ,600 ,1000]));