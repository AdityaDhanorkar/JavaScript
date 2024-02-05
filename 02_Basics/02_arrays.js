const my_First = ["Adity" , "Raghu"]

const my_Last = ["Dhanorkar" , "Charkhod"]

// my_First.push(my_Last);
// console.log(my_First);

 const my_other = my_First.concat(my_Last)

// console.log(my_other);

// const all_arr = [...my_First , ...my_Last]
// console.log(all_arr);

const infinity_arr = [1,2,3 , [ 5 ,10 ,15],25,56,48 ,[88,36,[55,456]]]

// console.log(infinity_arr.flat(Infinity)); 

const str = "Aditya"

// console.log(Array.isArray(str));
// console.log(Array.from(str));

// console.log(Array.from({name:"Aditya"}))

let name1 = "Aditya"
let name2 = "Atul"
let name3 = "Prajyot"
let name4 = "Rushikesh"

const merge_arr=Array.of(name1,name2,name3,name4)
console.log(merge_arr)