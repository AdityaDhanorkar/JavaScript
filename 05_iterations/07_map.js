//MAP

const number = [1,2,3,4,5,6,7,8,9,10]
//Using MAP
// const out = number.map((num) => num +10 )
// console.log(out);


//Using FOr Each
// const newNum = []

// number.forEach((num)=>{
//     newNum.push(num+10)
// })

// console.log(newNum);

const out = number
                .map((num)=> num*10)
                .map((num)=> num +1)
                .filter((num)=>num>40)
console.log(out);