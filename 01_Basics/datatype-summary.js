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