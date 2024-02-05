const myArr = [ 0 ,1 ,5 ,10 ,"Aditya", false]

// console.log(myArr);

const myHeros =["Bhagat singh" , "Sikhdev" , "Rajguru"]

// console.log(myHeros[2]);

const myArr2 = new Array(1 ,5 , 60 ,"Raghu",true)
// console.log(myArr2[2]);

// Array Method

myArr.push(100) //Add Element into Array at Last
myArr.pop() //Remove Element From Array at Last
myArr.pop()
myArr.unshift(261) //Add Element Into Array at start
myArr.shift() //Remove Element From Array At Start
myArr.shift()
// console.log(myArr);

const myArr3 = new Array( 0 , 2 ,8 ,10,20,15,"aditya")

// console.log(myArr3.includes(100));
// console.log(myArr3.indexOf('aditya'));
// console.log(myArr3.length);
// console.log(myArr.indexOf("raghu"));

const newarr = myArr3.join()
// console.log(myArr3);
// console.log(newarr);

// console.log(typeof newarr); //Tyoe is String

//Slice and Splice

console.log( "A" ,myArr3)

const myn1 = myArr3.slice(1 , 3 )
console.log(myn1);

console.log("B " , myArr3);

const myn2 = myArr3.splice( 1 , 3)

console.log(myn2);

console.log("C" ,myArr3);