//FOR OF LOOP

// for (const iterator of object) {
    
// }

//***************  ARRAY **********************
// const myarr = ["Aditya" , "Dhanorkar" ,"Patil"]
// let num = 0
// for (const num of myarr) {
//     console.log(num);
// }

//*****************  STRING *******************

// const str = "Hello World"
// const num2 = 0
// for (const num2 of str) {
//     console.log(`Each Value Of String :- ${num2}`);
// }

// ****************  MAP  *******************

const map =new Map()

map.set( 'name', "Aditya")
map.set('first' , "Raghu")
map.set('last',"Dhanorkar")
// console.log(map);

for (const [key , Value] of map) {
    console.log(`${key} :- ${Value}`);
}


// For Of Loop Not Iterable for Objects
// const myObject ={
//     'name' : "Aditya" ,
//     'Last' : "Dhanorkar"
// }

// for (const [key , Value] of myObject) {
//     console.log(`${key} :- ${Value}`);
// }