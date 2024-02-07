//Immediately Invoked Function Expressions

(function Coffe(){
    console.log(`Hi Aditya How Are You`);
})(); //Named IIFE 
// Coffe()

//IIFE On Arrow Function

// (() =>{
//     console.log(`Hi Raghu How Was Your Day`);
// })()

(function chai(name){
    console.log(`${name} How Are You ?`);
})("Patil");

( (last) =>{
    console.log(`Thank YOu ${last}`);
})("Dhanorkar")