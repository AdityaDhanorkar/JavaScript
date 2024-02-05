//Dates 

let myDate = new Date();

// console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

const date = new Date();
const time = date.toLocaleTimeString('es-ES' ,{timeZone:'Asia/Kolkata'});
// console.log(time);

// console.log(typeof myDate);

// let createMydate = new Date(2024 , 1 , 5)
// let createMydate = new Date(2024 , 1 , 5 , 16 , 18)
let createMydate = new Date("01-05-2024")
// console.log(createMydate);
// console.log(createMydate.toTimeString());
// console.log(createMydate.toLocaleTimeString());
// console.log(createMydate.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);

// console.log(createMydate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
    console.log(newDate.toLocaleString('default',{
        timeZone: 'Asia/Kolkata' 
    }))