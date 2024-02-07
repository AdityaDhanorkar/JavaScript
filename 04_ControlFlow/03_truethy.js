//Truthy And Falsy

const userEmail = ""

// if(userEmail){
//     console.log("Execute SuccesFully");
// }
// else{
//     console.log("Not Executed");
// }

// Falsy Value - false , 0 , -0 , BigInt 0n ,"",null , unfined , NaN

//Truthy Value - True , [] ," ", 'false',{} , "0",function(){}

if(userEmail.length ===0){
    console.log("Array Is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object IS Empty");
}

//Nullish Coalescing Operator(??)null Undefined

let val1;

// val1 = 10 ?? 20
// console.log(val1);

// val1 = null ?? 10 
// console.log(val1);

// val1 = undefined ?? 20 
// console.log(val1);

// val1 = null ?? undefined
// console.log(val1);

// val1 = undefined ?? null
// console.log(val1);

val1 = null ?? 5 ?? 10
console.log(val1);

//Terniary Operator

// const score = 100
// score >=80 ? console.log("Pass"):console.log("Fail");

let adult = 18
adult >=18 ? console.log("YOur Are Adult") : console.log("Your Are Not Adult");