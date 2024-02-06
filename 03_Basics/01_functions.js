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
console.log(UserLogin("Aditya"))
// console.log(UserLogin());