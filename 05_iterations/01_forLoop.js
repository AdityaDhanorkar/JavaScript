//FOR LOOP

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index <=10; index++) {
//     const element = index
//     console.log(element)   
// }

// console.log(element);

// for (let index = 0; index <= 20; index++) {
//     const element = index
//     if (element == 5) {
//         console.log(`Best Number Is there ${element}`)
//     }
//     console.log(element)
    
// }

// for (let i =1 ; i <=20 ; i++) {
//     console.log(`Outer Loop Is ${i}`);
//     console.log(`Table Of Number = ${i}`);
//     for (let j = 1 ;j<=10 ; j++) {
//         // console.log(`Inner Loop Is ${j}`);
//         console.log(`${i} * ${j} = ` + i * j);
//     }
    
// }

// const myarray = ["Raghu" , "Aditya" , "PAtil" , "Dhanorkar"]

//     console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }


//******************* Break *******************
// for (let index = 0; index < 10; index++) {
    
//     if(index ==5){
//         console.log(`Number 5 Is There`);
//         break
//     }
//     console.log(index);
// }

//******************** Continue ******************

for (let index = 0; index < 10; index++) {
    
    if (index ==5) {
        console.log(`Number 5 Is There`);
        continue
    }
    console.log(index);
    
}