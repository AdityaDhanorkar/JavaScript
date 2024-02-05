"use strict"

//Primitive datatype 
/*
 7-type of Primitive data type available in JacaScript are Follows-
 
 number 
 string
 symbol
 null
 undefined
 BigInt
 Boolean
*/

let score = 100

let scoreUpdate =100.1

let logId = false

let useMail;

let id = Symbol('123')

let idUpdate = Symbol('123')

let Placement = null

let BigIntNumber = 123456789323n

// console.log(typeof BigIntNumber);

// console.log(id===idUpdate); 
// console.log(typeof Placement); IMPORTANT




//Reference Data type (Non-Primitive Data Type)

//Array , Object , Functions

let heros = ["Aditya" , "Raghu ", "Others"]

// console.log(typeof heros);

let MyObject = {
    name:"Aditya",
    age:21 ,
}
// console.log(typeof MyObject);

const MyFunctions = function(){
    console.log("Hellow World");
}

// console.log(typeof MyFunctions);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive DataType) , Heap (Non-Primitive DataType)

//Stack - Copy
//Heap - Reference 

let myChannel = "CodeWithAdi"

let another = myChannel

// console.log(another);

another = "ChaiWithAdi";

// console.log(another);

// console.log(myChannel);

let userOne = {
    email : "adi@google.com" , 
    upi : "90@ybi"
}

// console.log(userOne);

let useTwo = userOne;
// console.log(useTwo);

useTwo.email= "Raghu@google.com"

console.log(userOne.email);

console.log(useTwo.email);