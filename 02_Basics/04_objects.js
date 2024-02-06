const tinder = new Object(); //SingleTone Objecct
// console.log(tinder);
const tinderUser = {};
// console.log(tinderUser);

tinderUser.id = "Rp261261"
tinderUser.email= "rp261261@google.com"
tinderUser.logedIn=true

// console.log(tinderUser);

const mainUser ={
    Score:82,
     Primary:{
        Seconadr:{
            name:"Aditya",
            Designaton:"Coder"
        }

    }
}

// console.log(mainUser.Primary.Seconadr.Designaton);


const obj1 = {1:"a" , 2:"b"}

const obj2 = {3:"c" , 4:"d"}

//const obj3 = {obj1 , obj2}

const obj3 = Object.assign( {} , obj1 , obj2)
// console.log(obj3);

const obj4 = { ...obj1 ,...obj2} //Spread Operator(IMP)
// console.log(obj4);

const User =[
{
    userName:"Aditya",
    emai:"rp261261@google.com"
},
{
    userName:"Aditya",
    emai:"rp261261@google.com"
},
{
    userName:"Aditya",
    emai:"rp261261@google.com"
},
{
    userName:"Aditya",
    emai:"rp261261@google.com"
}
]

User[1].emai

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));