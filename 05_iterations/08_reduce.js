const number =[1,2,3]

// const out = number.reduce(function (accu,curval){
//    console.log(`${accu} and ${curval}`);
//     return  accu+curval
// },0)

// console.log(out);

// const out = number.reduce((accu,curval)=>accu + curval)
// console.log(out);

const shoppingCart = [
    {
        course :"Js",
        price :2999
    },
    {
        course :"Py",
        price :4999
    },
    {
        course :"C",
        price :1999
    },
    {
        course :"Android",
        price :12999
    },
]

const totalPrice = shoppingCart.reduce((accu,num)=>accu + num.price ,0 )
console.log(totalPrice);